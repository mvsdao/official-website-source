import { useEffect, useState } from 'react'
import type { CardType } from '@/hooks/data.d'
import { useSelector } from 'react-redux'
import useDataHooks from '@/hooks/useDataHooks'
import type { ConstantInitTypes } from '@/contracts/constantInit'

export const useNftHooks = () => {
  const [cardList, setCardList] = useState<CardType[]>([])
  const [loading, setLoading] = useState(true)

  const { cardNftList } = useSelector((state: any) => state.infoInfo)
  const BallKingData: ConstantInitTypes = useDataHooks()

  useEffect(() => {
    if (cardNftList.length > 0) getList()
    else {
      setTimeout(() => {
        setLoading(false)
      }, 150)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardNftList, BallKingData])

  const getList = () => {
    try {
      let list: CardType[] = []
      cardNftList
        .sort((a: any, b: any) => b.tokenId - a.tokenId)
        .forEach((item: any, i: number) => {
          list.push({
            ...item,
            serialNumber: i,
            address: BallKingData?.Footballer_ADDRESS,
            nameTheme: 'Ball King NFT',
          })
        })
      setCardList(list)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  return { cardList, loading }
}
