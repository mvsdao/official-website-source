import { useConstant, getActiveChainId, RPC_URLS, defaultChainId } from './constant'
import { useSelector } from 'react-redux'
import Web3 from 'web3'
import { useState } from 'react'

const useContracts = () => {
  const walletNetWork = useSelector((state: any) => state.walletInfo.network)
  const [isNetWork] = useState<boolean>(() => getActiveChainId(RPC_URLS, walletNetWork))

  const { RPC_URL, CHAIN_ID } = useConstant[isNetWork ? walletNetWork : defaultChainId]
  const web3 = new Web3(Web3.givenProvider || RPC_URL)

  return {
    RPC_URL,
    CHAIN_ID,
    web3,
  }
}

export default useContracts
