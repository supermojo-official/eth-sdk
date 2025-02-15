import { expect } from 'earl'

import { importedAbiIdentifier } from './generateIndex'

describe(importedAbiIdentifier.name, () => {
  it('converts a list of keys to an ABI identifier', () => {
    const keys = ['mainnet', 'dai']
    const identifier = importedAbiIdentifier(keys)
    expect(identifier).toEqual('mainnet_dai_abi')
  })
})
