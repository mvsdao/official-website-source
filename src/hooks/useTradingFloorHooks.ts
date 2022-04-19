import type { CardType } from '@/hooks/data.d'
import type { ArrRequestType } from '@/common/data.d'
import { useEffect, useState } from 'react'
import type { ConstantInitTypes } from '@/contracts/constantInit'
import useDataHooks from '@/hooks/useDataHooks'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { objArrayDuplicateRemoval } from '@/utils'
import { readGetPastEvents, readGetApiEvents } from '@/contracts/common'

interface Type {
  isRefreshData: boolean
}

export const useTradingFloorHooks = (props: Type) => {
  const { isRefreshData } = props
  const BallKingData: ConstantInitTypes = useDataHooks()
  const { constant, Market_ADDRESS, apiKey, apiUrl, web3 } = BallKingData
  const { t } = useTranslation()

  const { cardNftList } = useSelector((state: any) => state.infoInfo)

  const [tradList, setTradList] = useState<CardType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (cardNftList.length > 0 && apiKey === '' && apiUrl === '') getTradList()
    if (cardNftList.length > 0 && apiKey !== '' && apiUrl !== '') getTradListApi()
    return () => {
      setTradList([])
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefreshData, cardNftList])

  const getTradList = async () => {
    try {
      let tradSource: any = await readGetPastEvents(constant.ContractMarket, 'GoodsAdded')
      let TRAD_DATA_LIST: CardType[] = []
      tradSource.forEach((element: any, index: number) => {
        let tokenId = element.returnValues.collectionId
        let cardNftObj = cardNftList.find((item: any) => Number(item.tokenId) === Number(tokenId))
        let obj: any = {
          ...cardNftObj,
          index,
          serialNumber: `trade${index}`,
          status: '2',
          isSell: false,
          blockNumber: element.blockNumber,
          nameTheme: t('trade.list.theme'),
          price: element.returnValues.price,
          address: element.returnValues.seller,
          collection: element.returnValues.collection,
        }
        TRAD_DATA_LIST.push(obj)
      })
      /** remove Goods */
      let removeGoodsSource: any = await readGetPastEvents(constant.ContractMarket, 'GoodsRemoved')
      let REMOVE_GOODS_LIST_DATA: CardType[] = []
      removeGoodsSource.forEach((element: any, index: number) => {
        let obj: any = {
          index: element.returnValues.index,
        }
        REMOVE_GOODS_LIST_DATA.push(obj)
      })
      let endIndex = await constant.ContractFootballer.methods.balanceOf(Market_ADDRESS).call()
      let data = endIndex === '0' ? [] : await constant.ContractFootballer.methods.ownedTokens(Market_ADDRESS, 0, endIndex).call()
      TRAD_DATA_LIST.sort(function (a: any, b: any) {
        return b.blockNumber - a.blockNumber
      })
      let arr1 = TRAD_DATA_LIST.filter((item) => !REMOVE_GOODS_LIST_DATA.some((ele) => Number(ele.index) === Number(item.index)))
      let arr2: CardType[] = objArrayDuplicateRemoval(arr1)
      let DATA_LIST: any[] = []
      data.forEach((tokenId: any) => {
        let arrs = arr2.filter((it) => it.tokenId.toString() === tokenId.toString())
        DATA_LIST.push(...arrs)
      })
      DATA_LIST.sort(function (a: any, b: any) {
        return b.blockNumber - a.blockNumber
      })
      setTradList(DATA_LIST)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.log('error', error)
      setLoading(false)
    }
  }

  const getTradListApi = async () => {
    try {
      let topic0GoodsAdded = await web3.utils.sha3('GoodsAdded(address,address,uint256,uint256,address,uint256)')
      let topic0GoodsRemoved = await web3.utils.sha3('GoodsRemoved(uint256)')
      let arrRequest: ArrRequestType[] = [
        { address: Market_ADDRESS, apiKey, apiUrl, topic0: topic0GoodsAdded, eventNme: 'GoodsAdded' },
        { address: Market_ADDRESS, apiKey, apiUrl, topic0: topic0GoodsRemoved, eventNme: 'GoodsRemoved' },
      ]
      let arrPromis: any[] = await Promise.all([readGetApiEvents(arrRequest[0]), readGetApiEvents(arrRequest[1])])

      let addedGoodsSource: any = arrPromis[0].result
      let removeGoodsSource: any = arrPromis[1].result
      let addedGoodsData: CardType[] = []
      let removeGoodsData: CardType[] = []
      let parameterArrayAddedData = ['uint256', 'uint256', 'address', 'uint256']
      let parameterArrayRemoveData = ['uint256']

      for (let i = 0; i < addedGoodsSource.length; i++) {
        let element = addedGoodsSource[i]
        let parameters = web3.eth.abi.decodeParameters(parameterArrayAddedData, element.data)
        let datas: any = {
          tokenId: parameters[0],
          seller: `0x${element.topics[1].substring(26, element.topics[1].length)}`,
          collection: `0x${element.topics[2].substring(26, element.topics[2].length)}`,
          amount: parameters[1],
          token: parameters[2],
          price: parameters[3],
        }
        let blockNumber: any = web3.utils.hexToNumber(element.blockNumber)
        let cardNftObj = cardNftList.find((item: any) => Number(item.tokenId) === Number(datas.tokenId))
        let obj: any = {
          ...cardNftObj,
          index: i,
          serialNumber: `trade${i}`,
          status: '2',
          isSell: false,
          blockNumber,
          nameTheme: t('trade.list.theme'),
          price: datas.price,
          address: datas.seller,
          collection: datas.collection,
        }
        addedGoodsData.push(obj)
      }

      removeGoodsSource.forEach((element: any, index: number) => {
        let parameters = web3.eth.abi.decodeParameters(parameterArrayRemoveData, element.data)
        let obj: any = {
          index: parameters[0],
        }
        removeGoodsData.push(obj)
      })

      let endIndex = await constant.ContractFootballer.methods.balanceOf(Market_ADDRESS).call()
      let data = endIndex === '0' ? [] : await constant.ContractFootballer.methods.ownedTokens(Market_ADDRESS, 0, endIndex).call()
      addedGoodsData.sort(function (a: any, b: any) {
        return b.blockNumber - a.blockNumber
      })
      let arr1 = addedGoodsData.filter((item) => !removeGoodsData.some((ele) => Number(ele.index) === Number(item.index)))
      let arr2: CardType[] = objArrayDuplicateRemoval(arr1)
      let DATA_LIST: any[] = []
      data.forEach((tokenId: any) => {
        let arrs = arr2.filter((it) => it.tokenId.toString() === tokenId.toString())
        DATA_LIST.push(...arrs)
      })
      DATA_LIST.sort(function (a: any, b: any) {
        return b.blockNumber - a.blockNumber
      })
      setTradList(DATA_LIST)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.log('error', error)
      setLoading(false)
    }
  }

  return { tradList, loading }
}
