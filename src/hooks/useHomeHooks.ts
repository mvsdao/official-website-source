import { useEffect, useState } from 'react'
import { CardType } from './data'
import { useSelector } from 'react-redux'

export const useHomeHooks = () => {
  const [homeList, setHomeList] = useState<CardType[]>([])

  const { cardNftList } = useSelector((state: any) => state.infoInfo)

  useEffect(() => {
    if (cardNftList.length > 0) getList()
    return () => setHomeList([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardNftList])

  const getList = async () => {
    let list: any[] = []
    cardNftList
      .sort((a: any, b: any) => b.tokenId - a.tokenId)
      .filter((item: any, i: number) => i < 2)
      .forEach((item: any, i: number) => {
        list.push({
          ...item,
          serialNumber: i + 1,
        })
      })
    setHomeList(list)
  }

  return { homeList }
}
