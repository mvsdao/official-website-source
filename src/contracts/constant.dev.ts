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
  1337: 'http://47.108.77.85:8545',
}

export const injected = new InjectedConnector({ supportedChainIds: [1337] })

export const walletconnect = (rpc: any, chainId: number) =>
  new WalletConnectConnector({
    rpc,
    chainId,
    qrcode: true,
    infuraId: '9aa3d95b3bc440fa88ea12eaa4456161',
  })

export const network = new NetworkConnector({
  urls: { 1337: RPC_URLS[1337] },
  defaultChainId: 1337,
})

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.NetWork]: network,
}

export const defaultChainId = 1337

export const useConstant = {
  1337: {
    CHAIN_ID: 1337,
    Blockchain: '47 Test',
    RPC_URL: 'http://47.108.77.85:8545',
    MvsDaoToken_ADDRESS: '0x246fBC1109B01771a0D69e3e79Fcc4D04da4D2dC',
    Footballer_ADDRESS: '0x55A674324146a74f59a7Dc02a0F52B9f6Ac1ADC5',
    Store_ADDRESS: '0xAb8569A618E2f107eDe901D3aF211858B1446d3b',
    Market_ADDRESS: '0x36850A87aB6c5b29154bF2197694D0e41c585C41',
    apiUrl: '',
    apiKey: '',
    uint: 'ETH',
  },
}

export const netWorks = {
  1337: {
    chainId: web3.utils.numberToHex(1337),
    isSwitch: true,
  },
}
