import BNB_ICON from '@/assets/token/BNB.svg'
import ETH_ICON from '@/assets/token/ETH.svg'
import METAMASK_ICON from '@/assets/metamask.svg'
import WALLET_CONNECT_ICON from '@/assets/wallet-connect.svg'
import BNB_MIN from '@/assets/token/Binance-min.png'
import ETH_MIN from '@/assets/token/Ethereum-min.png'
import { ImageError } from '@/common/init'
import ETH_ICON_PRICE from '@/assets/eth_icon.png'
import BNB_ICON_PRICE from '@/assets/token/Binance-min.png'

export interface listTypes {
  name: string
  icon: string
  chainId: any
  backgroundImage: string
  img: string
  fullName: string
}

export const NetWorkObj: any = {
  prd: [
    // {
    //   name: 'Ethereum',
    //   fullName: 'Ethereum Mainnet',
    //   icon: ETH_ICON,
    //   img: ETH_MIN,
    //   chainId: 1,
    //   backgroundImage: 'linear-gradient(to right,#495EFC,#3F84EE)',
    // },
    {
      name: 'BNB Chain',
      fullName: 'Binance Smart Chain',
      icon: BNB_ICON,
      img: BNB_MIN,
      chainId: 56,
      backgroundImage: 'linear-gradient(to right,#3E3F47,#525961)',
    },
  ],
  dev: [
    {
      name: 'Test',
      fullName: '47 Test NetWork',
      icon: ImageError,
      img: ImageError,
      chainId: 1337,
      backgroundImage: 'linear-gradient(73.28deg, #012033 6.51%, #012033 88.45%)',
    },
  ],
  uat: [
    {
      name: 'Kovan',
      fullName: 'Kovan Testnet',
      icon: ETH_ICON,
      img: ETH_MIN,
      chainId: 42,
      backgroundImage: 'linear-gradient(to right,#495EFC,#3F84EE)',
    },
    {
      name: 'Binance',
      fullName: 'BNB Smart Chain Testnet',
      icon: BNB_ICON,
      img: BNB_MIN,
      chainId: 97,
      backgroundImage: 'linear-gradient(to right,#3E3F47,#525961)',
    },
  ],
}

export const walletInit: { name: string; icon: string; link: string }[] = [
  {
    name: 'Metamask',
    link: 'Injected',
    icon: METAMASK_ICON,
  },
  {
    name: 'WalletConnect',
    link: 'WalletConnect',
    icon: WALLET_CONNECT_ICON,
  },
]

export const priceOptions = [
  {
    value: 'descend',
    label: 'Price descend from high to low',
  },
  {
    value: 'ascend',
    label: 'Price ascend from low to high',
  },
]

export interface StatusType {
  value: string
  lable: string
}

export const statusOptions: StatusType[] = [
  { value: '2', lable: 'Sold' },
  { value: '1', lable: 'Available for Sale' },
  { value: '', lable: 'All NFT' },
]

export const nftPriceIcon: any = {
  ETH: ETH_ICON_PRICE,
  BNB: BNB_ICON_PRICE,
}

export const nftPriceIconColor: any = {
  BNB: '#F0B90B',
}
