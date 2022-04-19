import { useContext } from 'react'
import type { ConstantInitTypes } from '@/contracts/constantInit'
import { Context } from '@/components/Web3Provider'

const useDataHooks = () => {
  const { data }: { data: ConstantInitTypes; blockNumber: number } = useContext<any>(Context)
  // console.log('data', data)
  // console.log('blockNumber', blockNumber)
  return data
}

export default useDataHooks
