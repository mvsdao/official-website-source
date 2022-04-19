import { useEffect, useState } from 'react'
import type { CardType } from '@/hooks/data.d'
import type { ArrRequestType } from '@/common/data.d'
import useDataHooks from '@/hooks/useDataHooks'
import { useSelector } from 'react-redux'
import type { ConstantInitTypes } from '@/contracts/constantInit'
import { objArrayDuplicateRemoval } from '@/utils'
import { readGetPastEvents, readGetApiEvents } from '@/contracts/common'

interface Type {
  myAddress: string
  isRefreshData: boolean
  tradList: CardType[]
}

export const useMyNftHooks = (props: Type) => {
  const { myAddress, isRefreshData, tradList } = props
  const BallKingData: ConstantInitTypes = useDataHooks()
  const { constant, apiKey, apiUrl, web3, Market_ADDRESS, Footballer_ADDRESS } = BallKingData

  const { cardNftList } = useSelector((state: any) => state.infoInfo)

  const [myNftList, setMyNftList] = useState<CardType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setMyNftList([])
    if (cardNftList.length > 0 && myAddress && apiKey === '' && apiUrl === '') getMyNftList()
    return () => {
      setMyNftList([])
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardNftList, myAddress, isRefreshData, tradList])

  useEffect(() => {
    setLoading(true)
    setMyNftList([])
    if (cardNftList.length > 0 && myAddress && apiKey !== '' && apiUrl !== '') getMyNftListApi()
    return () => {
      setMyNftList([])
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardNftList, myAddress, isRefreshData])

  /** Get my nft purchase, transaction data */
  const getMyNftList = async () => {
    try {
      /** remove Goods */
      let removeGoodsSource: any = await readGetPastEvents(constant.ContractMarket, 'GoodsRemoved')
      let REMOVE_GOODS_LIST_DATA: CardType[] = []
      removeGoodsSource.forEach((element: any, index: number) => {
        let obj: any = {
          index: element.returnValues.index,
        }
        REMOVE_GOODS_LIST_DATA.push(obj)
      })
      /** Purchase data */
      let purchaseDataSource: any = await readGetPastEvents(constant.ContractFootballer, 'Transfer', {
        to: [myAddress],
        from: ['0x0000000000000000000000000000000000000000'],
      })
      let PURCHASE_DATA_LIST: CardType[] = []
      purchaseDataSource.forEach((element: any, index: number) => {
        let tokenId = element.returnValues.tokenId
        let cardNftObj = cardNftList.find((item: any) => Number(item.tokenId) === Number(tokenId))
        let obj: any = {
          ...cardNftObj,
          index,
          serialNumber: `transfer${index}`,
          status: '1',
          isSell: false,
          blockNumber: element.blockNumber,
        }
        PURCHASE_DATA_LIST.push(obj)
      })
      /** For sale */
      let forSaleSource: any = await readGetPastEvents(constant.ContractMarket, 'GoodsAdded')
      let FOR_SALE_LIST: CardType[] = []
      forSaleSource.forEach((element: any, index: number) => {
        if (element.returnValues.seller !== myAddress) {
          return false
        }
        let tokenId = element.returnValues.collectionId
        let cardNftObj = cardNftList.find((item: any) => Number(item.tokenId) === Number(tokenId))
        let obj: any = {
          ...cardNftObj,
          index,
          serialNumber: `sale${index}`,
          status: '2',
          isSell: false,
          blockNumber: element.blockNumber,
          price: element.returnValues.price,
        }
        FOR_SALE_LIST.push(obj)
      })
      /** All purchased data */
      let purchasedDataSource: any = await readGetPastEvents(constant.ContractMarket, 'Purchased')
      let PURCHASED_DATA_LIST_MY: CardType[] = []
      purchasedDataSource.forEach((element: any, index: number) => {
        if (element.returnValues.seller === myAddress) {
          let tokenId = element.returnValues.collectionId
          let cardNftObj = cardNftList.find((item: any) => Number(item.tokenId) === Number(tokenId))
          let obj: any = {
            ...cardNftObj,
            index,
            serialNumber: `purchased${index}`,
            status: '1',
            isSell: false,
            blockNumber: element.blockNumber,
          }
          PURCHASED_DATA_LIST_MY.push(obj)
        }
      })
      let endIndex = await constant.ContractFootballer.methods.balanceOf(myAddress).call()
      let ownedTokens = endIndex === '0' ? [] : await constant.ContractFootballer.methods.ownedTokens(myAddress, 0, endIndex).call()

      let one1: CardType[] = [...PURCHASE_DATA_LIST, ...PURCHASED_DATA_LIST_MY]
      one1.sort(function (a: any, b: any) {
        return b.blockNumber - a.blockNumber
      })

      let start1 = objArrayDuplicateRemoval(one1)
      let arr0_1 = start1.filter((item) => !ownedTokens.some((ele: any) => Number(ele) === Number(item.tokenId)))
      let arr0 = start1.filter((item) => !arr0_1.some((ele) => Number(ele.tokenId) === Number(item.tokenId)))
      let myArrGoodsAdded_1: CardType[] = FOR_SALE_LIST.filter(
        (item) => !REMOVE_GOODS_LIST_DATA.some((ele) => Number(ele.index) === Number(item.index)),
      )
      let myArrGoodsAdded: CardType[] = myArrGoodsAdded_1.filter(
        (item) => !ownedTokens.some((ele: any) => Number(ele) === Number(item.tokenId)),
      )
      let arr1_1 = objArrayDuplicateRemoval(
        myArrGoodsAdded.sort(function (a: any, b: any) {
          return b.blockNumber - a.blockNumber
        }),
      )
      let arr1: CardType[] = arr1_1.filter((item) =>
        tradList.some((ele) => ele.address === myAddress && Number(ele.tokenId) === Number(item.tokenId)),
      )
      let arr2: CardType[] = arr1_1.filter((item) => !arr1.some((ele) => Number(ele.tokenId) === Number(item.tokenId)))
      arr2.forEach((item) => (item.isSell = true))

      /** arr0 -- Means available for sale */
      let start1Arr: CardType[] = [...arr0]
      /** arr1 -- Sold for cancellation, arr2 -- Sold successfully */
      let start2Arr: CardType[] = [...arr1, ...arr2]
      let start1Arr1: CardType[] = objArrayDuplicateRemoval(
        start1Arr.sort(function (a: any, b: any) {
          return b.blockNumber - a.blockNumber
        }),
      )
      let start2Arr1: CardType[] = objArrayDuplicateRemoval(
        start2Arr.sort(function (a: any, b: any) {
          return b.blockNumber - a.blockNumber
        }),
      )
      let DATA_LIST: CardType[] = objArrayDuplicateRemoval(
        [...start1Arr1, ...start2Arr1].sort(function (a: any, b: any) {
          return b.blockNumber - a.blockNumber
        }),
      )
      setMyNftList(DATA_LIST)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.log('error', error)
      setLoading(false)
    }
  }

  const getMyNftListApi = async () => {
    try {
      let topic0GoodsAdded = await web3.utils.sha3('GoodsAdded(address,address,uint256,uint256,address,uint256)')
      let topic0GoodsRemoved = await web3.utils.sha3('GoodsRemoved(uint256)')
      let topic0Transfer = await web3.utils.sha3('Transfer(address,address,uint256)')
      let topic0Purchased = await web3.utils.sha3('Purchased(address,address,uint256,uint256)')

      let arrRequest: ArrRequestType[] = [
        { address: Market_ADDRESS, apiKey, apiUrl, topic0: topic0GoodsAdded, eventNme: 'GoodsAdded' },
        { address: Market_ADDRESS, apiKey, apiUrl, topic0: topic0GoodsRemoved, eventNme: 'GoodsRemoved' },
        { address: Footballer_ADDRESS, apiKey, apiUrl, topic0: topic0Transfer, eventNme: 'Transfer' },
        { address: Market_ADDRESS, apiKey, apiUrl, topic0: topic0Purchased, eventNme: 'Purchased' },
      ]
      let arrPromis: any[] = await Promise.all([
        readGetApiEvents(arrRequest[0]),
        readGetApiEvents(arrRequest[1]),
        readGetApiEvents(arrRequest[2]),
        readGetApiEvents(arrRequest[3]),
      ])

      let addedGoodsSource: any = arrPromis[0].result
      let removeGoodsSource: any = arrPromis[1].result
      let transferSource: any = arrPromis[2].result
      let purchasedSource: any = arrPromis[3].result
      let addedGoodsData: CardType[] = []
      let removeGoodsData: CardType[] = []
      let transferData: CardType[] = []
      let purchasedData: CardType[] = []
      let parameterArrayAddedData = ['uint256', 'uint256', 'address', 'uint256']
      let parameterArrayRemoveData = ['uint256']
      let parameterArrayPurchasedData = ['uint256', 'uint256']

      removeGoodsSource.forEach((element: any, index: number) => {
        let parameters = web3.eth.abi.decodeParameters(parameterArrayRemoveData, element.data)
        let obj: any = {
          index: parameters[0],
        }
        removeGoodsData.push(obj)
      })

      for (let i = 0; i < transferSource.length; i++) {
        let element = transferSource[i]
        let tokenId = web3.utils.hexToNumber(element.topics[3])
        let datas: any = {
          from: `0x${element.topics[1].substring(26, element.topics[1].length)}`,
          to: `0x${element.topics[2].substring(26, element.topics[2].length)}`,
          tokenId: tokenId.toString(),
        }
        if (datas.to === myAddress.toLowerCase() && datas.from === '0x0000000000000000000000000000000000000000') {
          let cardNftObj = cardNftList.find((item: any) => Number(item.tokenId) === Number(datas.tokenId))
          let blockNumber: any = web3.utils.hexToNumber(element.blockNumber)
          let obj: any = {
            ...cardNftObj,
            index: i,
            serialNumber: `transfer${i}`,
            status: '1',
            isSell: false,
            blockNumber,
          }
          transferData.push(obj)
        }
      }

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
        if (datas.seller !== myAddress.toLowerCase()) continue
        let blockNumber: any = web3.utils.hexToNumber(element.blockNumber)
        let cardNftObj = cardNftList.find((item: any) => Number(item.tokenId) === Number(datas.tokenId))
        let obj: any = {
          ...cardNftObj,
          index: i,
          serialNumber: `sale${i}`,
          status: '2',
          isSell: false,
          blockNumber,
          price: datas.price,
        }
        addedGoodsData.push(obj)
      }

      for (let i = 0; i < purchasedSource.length; i++) {
        let element = purchasedSource[i]
        let parameters = web3.eth.abi.decodeParameters(parameterArrayPurchasedData, element.data)
        let datas: any = {
          seller: `0x${element.topics[1].substring(26, element.topics[1].length)}`,
          collection: `0x${element.topics[2].substring(26, element.topics[2].length)}`,
          collectionId: parameters[0],
          amount: parameters[1],
        }
        if (datas.seller !== myAddress.toLowerCase()) continue
        let blockNumber: any = web3.utils.hexToNumber(element.blockNumber)
        let cardNftObj = cardNftList.find((item: any) => Number(item.tokenId) === Number(datas.collectionId))
        let obj: any = {
          ...cardNftObj,
          index: i,
          serialNumber: `purchased${i}`,
          status: '1',
          isSell: false,
          blockNumber,
        }
        purchasedData.push(obj)
      }

      let endIndex = await constant.ContractFootballer.methods.balanceOf(myAddress).call()
      let ownedTokens = endIndex === '0' ? [] : await constant.ContractFootballer.methods.ownedTokens(myAddress, 0, endIndex).call()
      let one1: CardType[] = [...transferData, ...purchasedData]
      one1.sort(function (a: any, b: any) {
        return b.blockNumber - a.blockNumber
      })

      let start1 = objArrayDuplicateRemoval(one1)
      let arr0_1 = start1.filter((item) => !ownedTokens.some((ele: any) => Number(ele) === Number(item.tokenId)))
      let arr0 = start1.filter((item) => !arr0_1.some((ele) => Number(ele.tokenId) === Number(item.tokenId)))
      let myArrGoodsAdded_1: CardType[] = addedGoodsData.filter(
        (item) => !removeGoodsData.some((ele) => Number(ele.index) === Number(item.index)),
      )
      let myArrGoodsAdded: CardType[] = myArrGoodsAdded_1.filter(
        (item) => !ownedTokens.some((ele: any) => Number(ele) === Number(item.tokenId)),
      )
      let arr1_1 = objArrayDuplicateRemoval(
        myArrGoodsAdded.sort(function (a: any, b: any) {
          return b.blockNumber - a.blockNumber
        }),
      )

      let tradListData: any[] = await getTradListApi(addedGoodsSource, removeGoodsSource)

      let arr1: CardType[] = arr1_1.filter((item) =>
        tradListData.some((ele) => ele.address === myAddress.toLowerCase() && Number(ele.tokenId) === Number(item.tokenId)),
      )
      let arr2: CardType[] = arr1_1.filter((item) => !arr1.some((ele) => Number(ele.tokenId) === Number(item.tokenId)))
      arr2.forEach((item) => (item.isSell = true))
      /** arr0 -- Means available for sale */
      let start1Arr: CardType[] = [...arr0]
      /** arr1 -- Sold for cancellation, arr2 -- Sold successfully */
      let start2Arr: CardType[] = [...arr1, ...arr2]
      let start1Arr1: CardType[] = objArrayDuplicateRemoval(
        start1Arr.sort(function (a: any, b: any) {
          return b.blockNumber - a.blockNumber
        }),
      )
      let start2Arr1: CardType[] = objArrayDuplicateRemoval(
        start2Arr.sort(function (a: any, b: any) {
          return b.blockNumber - a.blockNumber
        }),
      )
      let DATA_LIST: CardType[] = objArrayDuplicateRemoval(
        [...start1Arr1, ...start2Arr1].sort(function (a: any, b: any) {
          return b.blockNumber - a.blockNumber
        }),
      )
      setMyNftList(DATA_LIST)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } catch (error) {
      console.log('error', error)
      setLoading(false)
    }
  }

  const getTradListApi = async (addedGoodsSource: any, removeGoodsSource: any) => {
    let addedGoodsData: CardType[] = []
    let removeGoodsData: CardType[] = []
    let parameterArrayAddedData = ['uint256', 'uint256', 'address', 'uint256']
    let parameterArrayRemoveData = ['uint256']
    let DATA_LIST: any[] = []

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
        blockNumber,
        address: datas.seller,
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
    data.forEach((tokenId: any) => {
      let arrs = arr2.filter((it) => it.tokenId.toString() === tokenId.toString())
      DATA_LIST.push(...arrs)
    })
    DATA_LIST.sort(function (a: any, b: any) {
      return b.blockNumber - a.blockNumber
    })
    return DATA_LIST
  }

  return { myNftList, loading }
}
