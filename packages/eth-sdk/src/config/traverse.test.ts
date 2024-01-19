import { expect, mockFn } from 'earl'
import { ethers } from 'ethers'

import { traverseContractsMap } from './traverse'
import { EthSdkContracts, parseAddress } from './types'

describe('traverse', () => {
  it('traverses not-nested definitions', async () => {
    const def: EthSdkContracts = {
      mainnet: {
        dai: parseAddress(ethers.ZeroAddress),
      },
    }

    const traverseSpy = mockFn().returns(undefined)

    await traverseContractsMap(def, traverseSpy)

    expect(traverseSpy).toHaveBeenCalledWith('mainnet', ['dai'], ethers.ZeroAddress)
  })

  it('traverses nested definitions', async () => {
    const def: EthSdkContracts = {
      mainnet: {
        maker: {
          dai: parseAddress('0x6b175474e89094c44da98b954eedeac495271d0f'),
        },
        compound: {
          cDai: parseAddress('0x5d3a536e4d6dbd6114cc1ead35777bab948e3643'),
        },
      },
    }

    const traverseSpy = mockFn().returns(undefined)

    await traverseContractsMap(def, traverseSpy)

    expect(traverseSpy).toHaveBeenCalledTimes(2)
    expect(traverseSpy).toHaveBeenCalledWith('mainnet', ['maker', 'dai'], '0x6b175474e89094c44da98b954eedeac495271d0f')
    expect(traverseSpy).toHaveBeenCalledWith(
      'mainnet',
      ['compound', 'cDai'],
      '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
    )
  })
})
