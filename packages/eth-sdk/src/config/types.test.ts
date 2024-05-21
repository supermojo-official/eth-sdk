import { expect } from 'earl'
import { ethers } from 'ethers'

import { EthSdkConfigInput, ethSdKContractsSchema } from '.'
import { Address, parseAddress, parseEthSdkConfig } from './types'

describe('config types', () => {
  describe(parseAddress.name, () => {
    it('throws when argument is not an address', () => {
      expect(() => parseAddress('T-Rex')).toThrow('"T-Rex" is not an address.')
    })

    it('parses an address', () => {
      const actual: Address = parseAddress(ethers.ZeroAddress)
      expect(actual).toEqual(ethers.ZeroAddress as Address)
    })
  })

  describe('ethSdKContractsSchema', () => {
    it('parses valid schemas', () => {
      ethSdKContractsSchema.parse({
        mainnet: {
          a: ethers.ZeroAddress,
          b: {
            c: ethers.ZeroAddress,
            d: {
              e: ethers.ZeroAddress,
            },
          },
        },
      })
    })
  })

  describe(parseEthSdkConfig.name, () => {
    it('throws when address is invalid', () => {
      const invalidValues = ['T-Rex0000000000000000000000000000000000000', '0x0', '0x' + '0'.repeat(50)]

      for (const invalid of invalidValues) {
        const input: EthSdkConfigInput = {
          contracts: {
            optimismKovan: {
              valid: '0x0000000000000000000000000000000000000000',
              // @ts-expect-error
              invalid,
            },
          },
        }

        expect(() => parseEthSdkConfig(input)).toThrow(INVALID_ADDRESS_EXPECTED_ERROR_MESSAGE)
      }
    })

    it('parses valid schemas', () => {
      const input = {
        contracts: {
          mainnet: {
            dai: ethers.ZeroAddress,
          },
        },
        rpc: {
          mainnet: 'https://cloudflare-eth.com',
          'my-network': 'https://cloudflare-eth.com/my-network',
        },
      }

      expect(parseEthSdkConfig(input)).toEqual({
        contracts: input.contracts as any,
        outputPath: expect.includes(''),
        etherscanKeys: {},
        etherscanURLs: {},
        rpc: {
          mainnet: 'https://cloudflare-eth.com',
          'my-network': 'https://cloudflare-eth.com/my-network',
        },
        abiSource: 'etherscan',
        networkIds: {},
      })
    })

    it('throws on invalid schemas', () => {
      const schema: unknown = {
        1: true,
      }

      expect(() => parseEthSdkConfig(schema)).toThrow(`Unrecognized key(s) in object: '1'`)
    })
  })
})

const INVALID_ADDRESS_EXPECTED_ERROR_MESSAGE = new RegExp(`\
Failed to parse eth-sdk config:
(invalid_string|too_small|too_big) at "contracts.optimismKovan.invalid": An address must be 42 characters hexadecimal number string.`)
