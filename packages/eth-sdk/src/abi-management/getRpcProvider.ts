import { FetchRequest, JsonRpcApiProviderOptions, JsonRpcProvider, Networkish, Provider } from 'ethers'

import { EthSdkConfig, RpcURLs } from '../config'
import { NetworkSymbol } from './networks'

const INFURA_PROJECT_URL = '0993a4f4500c4fff88649d28b331898c'

const rpcProviders: RpcURLs = {
  mainnet: `https://mainnet.infura.io/v3/${INFURA_PROJECT_URL}`,
  kovan: `https://kovan.infura.io/v3/${INFURA_PROJECT_URL}`,
  rinkeby: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_URL}`,
  ropsten: `https://ropsten.infura.io/v3/${INFURA_PROJECT_URL}`,
  goerli: `https://goerli.infura.io/v3/${INFURA_PROJECT_URL}`,
  sepolia: `https://sepolia.infura.io/v3/${INFURA_PROJECT_URL}`,
}

export interface IJsonRpcProviderExtended extends Provider {
  url?: string
}

export class JsonRpcProviderExtended extends JsonRpcProvider implements IJsonRpcProviderExtended {
  readonly url?: string
  constructor(url?: string | FetchRequest, network?: Networkish, options?: JsonRpcApiProviderOptions) {
    super(url, network, options)
    if (url instanceof FetchRequest) {
      this.url = url.url
    } else if (typeof url === 'string') {
      this.url = url
    }
  }
}

export function getRpcProvider(config: EthSdkConfig, network: NetworkSymbol): IJsonRpcProviderExtended | null {
  const rpcUrl = config.rpc[network] || rpcProviders[network]

  return rpcUrl ? new JsonRpcProviderExtended(rpcUrl) : null
}

export type GetRpcProvider = typeof getRpcProvider
