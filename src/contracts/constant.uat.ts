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
  42: 'https://kovan.infura.io/v3/84842078b09946638c03157f83405213',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
}

export const injected = new InjectedConnector({ supportedChainIds: [42, 97] })

export const walletconnect = (rpc: any, chainId: number) =>
  new WalletConnectConnector({
    rpc,
    chainId,
    qrcode: true,
    infuraId: '84842078b09946638c03157f83405213',
  })

export const network = new NetworkConnector({
  urls: { 42: RPC_URLS[42], 97: RPC_URLS[97] },
  defaultChainId: 42,
})

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.NetWork]: network,
}

export const defaultChainId = 42

export const useConstant = {
  42: {
    CHAIN_ID: 42,
    Blockchain: 'Kovan',
    RPC_URL: 'https://kovan.infura.io/v3/84842078b09946638c03157f83405213',
    MvsDaoToken_ADDRESS: '0xdADa3E2FD8F98Ffb327B40BA17b23BDFB0a8ee19',
    Footballer_ADDRESS: '0x6d0acCbeF0A5ead43c3202Ff46C4f50202959E3F',
    Store_ADDRESS: '0xdA2386439025e65205b2889B47AC4F279187DB44',
    Market_ADDRESS: '0xceF75Da6E6583F7d043C63f82CaDEf91fA5ebB2F',
    apiUrl: '',
    apiKey: '',
    uint: 'ETH',
  },
  97: {
    CHAIN_ID: 97,
    Blockchain: 'Binance Smart Chain Test',
    RPC_URL: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    MvsDaoToken_ADDRESS: '0x4b2f12214daD3D9626bDdf5E3962e8456E621dd4',
    Footballer_ADDRESS: '0x24512C41595e6CFDb204469Ed848b1b52cD4d016',
    Store_ADDRESS: '0x9bd5f4D6d94367c8057883A482091f91fCACD2FF',
    Market_ADDRESS: '0xa7518D8bcb65B50BA201f9f12e9070d9031ceBD9',
    apiUrl: 'https://api-testnet.bscscan.com/api',
    apiKey: 'E5IJSJXIB3AVB95X4S4ZICSKENXTXDFETD',
    uint: 'BNB',
  },
}

export const netWorks = {
  42: {
    chainId: web3.utils.numberToHex(42),
    isSwitch: true,
  },
  97: {
    chainId: web3.utils.numberToHex(97),
    chainName: 'BNB Smart Chain Testnet',
    nativeCurrency: {
      name: 'Bnb',
      symbol: 'Bnb',
      decimals: 18,
    },
    rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
    blockExplorerUrls: ['https://testnet.bscscan.com'],
  },
}
