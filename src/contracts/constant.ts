import * as prdConstants from './constant.prd'
import * as uatConstants from './constant.uat'
import * as devConstants from './constant.dev'
import { NetWorkObj } from './init'
import Footballer from './abis/Footballer.json'
import Market from './abis/Market.json'
import MvsDaoToken from './abis/MvsDaoToken.json'
import Store from './abis/Store.json'

const constants: any = {
  prd: prdConstants,
  uat: uatConstants,
  dev: devConstants,
}

export interface ConnectorNamesType {
  src: 'Injected' | 'WalletConnect' | 'NetWork'
}

const { REACT_APP_ENV = 'prd' } = process.env
export const { useConstant, RPC_URLS, injected, walletconnect, network, connectorsByName, defaultChainId, netWorks } =
  constants[REACT_APP_ENV]

export const netWorkInit = NetWorkObj[REACT_APP_ENV]

export const Footballer_ABI: any = Footballer
export const Market_ABI: any = Market
export const MvsDaoToken_ABI: any = MvsDaoToken
export const Store_ABI: any = Store

export const getActiveChainId = (arr: any, network: any) => {
  let objChainId = Object.keys(arr)
  let isTrue = objChainId.some((item) => item === network.toString())
  return isTrue
}
