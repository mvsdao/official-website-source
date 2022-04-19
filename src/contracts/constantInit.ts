import Web3 from 'web3'
import { useConstant, Footballer_ABI, Market_ABI, MvsDaoToken_ABI, Store_ABI } from './constant'

export interface ConstantBallTypes {
  ContractMvsDaoToken: any
  ContractFootballer: any
  ContractStore: any
  ContractMarket: any
}

export interface ConstantInitTypes {
  web3: Web3
  MvsDaoToken_ADDRESS: string
  Footballer_ADDRESS: string
  Store_ADDRESS: string
  Market_ADDRESS: string
  constant: ConstantBallTypes
  toWeiFromWei: (s: any) => void
  minimumSaleAmount: number
  nftPageSize: number
  tradePageSize: number
  myNftPageSize: number
  Blockchain: string
  apiUrl: string
  apiKey: string
  uint: string
}

export class ConstantInit {
  web3: Web3
  MvsDaoToken_ADDRESS: string
  Footballer_ADDRESS: string
  Store_ADDRESS: string
  Market_ADDRESS: string
  constant: ConstantBallTypes
  minimumSaleAmount: number
  nftPageSize: number
  tradePageSize: number
  myNftPageSize: number
  Blockchain: string
  apiUrl: string
  apiKey: string
  uint: string

  constructor(provider: any, chainId: string) {
    const { REACT_APP_ENV = 'prd' } = process.env
    const { MvsDaoToken_ADDRESS, Footballer_ADDRESS, Market_ADDRESS, Store_ADDRESS, Blockchain, apiUrl, apiKey, uint } =
      useConstant[chainId]
    this.web3 = new Web3(provider)
    this.Blockchain = Blockchain
    this.apiKey = apiKey
    this.apiUrl = apiUrl
    this.uint = uint
    this.MvsDaoToken_ADDRESS = MvsDaoToken_ADDRESS
    this.Footballer_ADDRESS = Footballer_ADDRESS
    this.Market_ADDRESS = Market_ADDRESS
    this.Store_ADDRESS = Store_ADDRESS
    this.constant = {
      ContractMvsDaoToken: new this.web3.eth.Contract(MvsDaoToken_ABI, MvsDaoToken_ADDRESS),
      ContractFootballer: new this.web3.eth.Contract(Footballer_ABI, Footballer_ADDRESS),
      ContractStore: new this.web3.eth.Contract(Store_ABI, Store_ADDRESS),
      ContractMarket: new this.web3.eth.Contract(Market_ABI, Market_ADDRESS),
    }
    console.log('REACT_APP_ENV', REACT_APP_ENV)
    this.minimumSaleAmount = REACT_APP_ENV === 'uat' ? 0.001 : 1
    this.nftPageSize = 16
    this.tradePageSize = 16
    this.myNftPageSize = 8
  }

  toWeiFromWei = (number: any) => {
    let data = this.web3.utils.fromWei(number, 'ether')
    return Number(data).toFixed(6)
  }
}
