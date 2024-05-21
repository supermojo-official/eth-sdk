import { expect, mockFn } from 'earl'
import { ethers,Interface, JsonRpcProvider, TransactionRequest } from 'ethers'

import { randomAddress } from '../../test/test-utils'
import { Abi } from '../types'
import {
  detectProxy,
  EIP1967_IMPLEMENTATION_STORAGE_SLOT,
  NUMBER_OF_KNOWN_STORAGE_SLOTS,
  ZEPPELIN_IMPLEMENTATION_STORAGE_SLOT,
} from './detectProxy'

describe(detectProxy.name, () => {
  const abiWithImplementationGetter: Abi = [
    { name: 'implementation', type: 'function', outputs: [{ type: 'address' }], stateMutability: 'view' },
  ]
  const proxyAddr = randomAddress('0x123')
  const implAddr = randomAddress('0x456')
  const implementationCall: TransactionRequest = {
    to: proxyAddr,
    data: new Interface(abiWithImplementationGetter).encodeFunctionData('implementation', []),
  }

  it('reads storage under EIP1967 implementation storage slot', async () => {
    const rpcProvider = {
      call: mockFn<JsonRpcProvider['call']>(),
      getCode: mockFn<JsonRpcProvider['getCode']>().resolvesToOnce('0xfff'),
      getStorage: mockFn<JsonRpcProvider['getStorage']>()
        .given(proxyAddr, EIP1967_IMPLEMENTATION_STORAGE_SLOT)
        .resolvesToOnce(implAddr),
    }
    const abi: Abi = []

    const actual = await detectProxy(proxyAddr, abi, rpcProvider)

    expect(actual).toEqual({ implAddress: implAddr, isProxy: true })
    expect(rpcProvider.getStorage).toHaveBeenCalledWith(proxyAddr as string, EIP1967_IMPLEMENTATION_STORAGE_SLOT)
  })

  it('reads storage under OpenZeppelin implementation storage slot', async () => {
    const rpcProvider = {
      call: mockFn<JsonRpcProvider['call']>(),
      getCode: mockFn<JsonRpcProvider['getCode']>().resolvesToOnce('0xfff'),
      getStorage: mockFn<JsonRpcProvider['getStorage']>()
        .resolvesTo(ethers.ZeroAddress)
        .given(proxyAddr, ZEPPELIN_IMPLEMENTATION_STORAGE_SLOT)
        .resolvesToOnce(implAddr),
    }
    const abi: Abi = []

    const actual = await detectProxy(proxyAddr, abi, rpcProvider)

    expect(actual).toEqual({ implAddress: implAddr, isProxy: true })
    expect(rpcProvider.getStorage).toHaveBeenCalledWith(proxyAddr, EIP1967_IMPLEMENTATION_STORAGE_SLOT)
    expect(rpcProvider.getStorage).toHaveBeenCalledWith(proxyAddr, ZEPPELIN_IMPLEMENTATION_STORAGE_SLOT)
  })

  it('detects .implementation getter', async () => {
    const rpcProvider = {
      call: mockFn<JsonRpcProvider['call']>().resolvesToOnce(implAddr),
      getCode: mockFn<JsonRpcProvider['getCode']>().resolvesToOnce('0xfff'),
      getStorage: mockFn<JsonRpcProvider['getStorage']>().resolvesTo(ethers.ZeroAddress),
    }

    const actual = await detectProxy(proxyAddr, abiWithImplementationGetter, rpcProvider)

    expect(actual).toEqual({
      implAddress: implAddr,
      isProxy: true,
    })
    expect(rpcProvider.getStorage.calls.length).toEqual(NUMBER_OF_KNOWN_STORAGE_SLOTS)
    expect(rpcProvider.call).toHaveBeenCalledWith(implementationCall)
    expect(rpcProvider.getCode).toHaveBeenCalledWith(implAddr)
  })

  it('returns { isProxy: false } when .implementation returns nothing', async () => {
    const rpcProvider = {
      call: mockFn<JsonRpcProvider['call']>().resolvesToOnce(ethers.ZeroAddress),
      getCode: mockFn<JsonRpcProvider['getCode']>().resolvesToOnce('0xfff'),
      getStorage: mockFn<JsonRpcProvider['getStorage']>().resolvesTo(ethers.ZeroAddress),
    }

    const actual = await detectProxy(proxyAddr, abiWithImplementationGetter, rpcProvider)

    expect(rpcProvider.getCode.calls.length).toEqual(0)
    expect(rpcProvider.getStorage.calls.length).toEqual(NUMBER_OF_KNOWN_STORAGE_SLOTS)
    expect(actual).toEqual({ isProxy: false })
  })

  it('returns { isProxy: false } when address from .implementation has no contract code', async () => {
    const rpcProvider = {
      call: mockFn<JsonRpcProvider['call']>().resolvesToOnce(implAddr),
      getCode: mockFn<JsonRpcProvider['getCode']>().given(implAddr).resolvesToOnce(ethers.ZeroAddress),
      getStorage: mockFn<JsonRpcProvider['getStorage']>().resolvesTo(ethers.ZeroAddress),
    }

    const actual = await detectProxy(proxyAddr, abiWithImplementationGetter, rpcProvider)

    expect(rpcProvider.getStorage.calls.length).toEqual(NUMBER_OF_KNOWN_STORAGE_SLOTS)
    expect(actual).toEqual({ isProxy: false })
  })

  it('detects and calls custom implementation getters', async () => {
    const abi: Abi = [
      { name: 'currentImplementation', type: 'function', outputs: [{ type: 'address' }], stateMutability: 'view' },
      {
        name: 'pendingCurrentImplementation',
        type: 'function',
        outputs: [{ type: 'address' }],
        stateMutability: 'view',
      },
    ]
    const rpcProvider = {
      call: mockFn<JsonRpcProvider['call']>()
        .given({ to: proxyAddr, data: new Interface(abi).encodeFunctionData('currentImplementation', []) })
        .resolvesToOnce(implAddr),
      getCode: mockFn<JsonRpcProvider['getCode']>().resolvesToOnce('0xfff'),
      getStorage: mockFn<JsonRpcProvider['getStorage']>().resolvesTo(ethers.ZeroAddress),
    }

    const actual = await detectProxy(proxyAddr, abi, rpcProvider)
    expect(actual).toEqual({
      implAddress: implAddr,
      isProxy: true,
    })
  })
})
