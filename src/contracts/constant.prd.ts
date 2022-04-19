import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import Web3 from 'web3'

const web3 = new Web3(Web3.givenProvider)

enum ConnectorNames {
  Injected = 'Injected',
  WalletConnect = 'WalletConnect',
  NetWork = 'NetWork',
}

export interface ConnectorNamesType {
  src: 'Injected' | 'WalletConnect' | 'NetWork'
}

export const RPC_URLS: { [chainId: number]: string } = {
  // 1: 'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213',
  56: 'https://bsc-dataseed1.binance.org',
}

export const injected = new InjectedConnector({ supportedChainIds: [1, 56] })

export const walletconnect = (rpc: any, chainId: number) =>
  new WalletConnectConnector({
    rpc,
    chainId,
    qrcode: true,
    infuraId: '84842078b09946638c03157f83405213',
  })

export const network = new NetworkConnector({
  // 1: RPC_URLS[1],
  urls: { 56: RPC_URLS[56] },
  defaultChainId: 56,
})

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.NetWork]: network,
}

export const defaultChainId = 56

export const useConstant = {
  // 1: {
  //   CHAIN_ID: 1,
  //   Blockchain: 'Ethereum',
  //   RPC_URL: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  //   MvsDaoToken_ADDRESS: '',
  //   Footballer_ADDRESS: '',
  //   Store_ADDRESS: '',
  //   Market_ADDRESS: '',
  //   apiUrl: '',
  //   apiKey: '',
  //   uint: 'ETH',
  // },
  56: {
    CHAIN_ID: 56,
    Blockchain: 'Binance Smart Chain',
    RPC_URL: 'https://bsc-dataseed1.binance.org',
    MvsDaoToken_ADDRESS: '0xF71694F956d57a1DC21cB31dDa70a8a606c9C9F4',
    Footballer_ADDRESS: '0x3C1f3d64B9408f20547b06Bc0eA707723Ba46A39',
    Store_ADDRESS: '0x97ff228C5a8D422904D6AFF0d4a226b91F7c80D3',
    Market_ADDRESS: '0xdE7EB9fFb6a8Bc7AB4294116E4cA6d4F385f699E',
    apiUrl: 'https://api.bscscan.com/api',
    apiKey: 'E5IJSJXIB3AVB95X4S4ZICSKENXTXDFETD',
    uint: 'BNB',
  },
}

export const netWorks = {
  // 1: {
  //   chainId: web3.utils.numberToHex(1),
  //   isSwitch: true,
  // },
  56: {
    chainId: web3.utils.numberToHex(56),
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed1.binance.org'],
    blockExplorerUrls: ['https://bscscan.com'],
  },
}
