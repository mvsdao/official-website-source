import { useEffect, useState } from 'react'

import type { CardType } from '@/hooks/data.d'
import SHOP_DETAILS from '@/assets/shop_details.png'
import useDataHooks from '@/hooks/useDataHooks'
import type { ConstantInitTypes } from '@/contracts/constantInit'
import { useTranslation } from 'react-i18next'

export const useShopHooks = () => {
  const BallKingData: ConstantInitTypes = useDataHooks()
  const { constant } = BallKingData
  const { t } = useTranslation()

  const [details] = useState<CardType>(() => {
    return {
      name: t('shop.init.title'),
      image: SHOP_DETAILS,
      serialNumber: 0,
      tokenId: '',
    }
  })
  const [nftPrice, setNftPrice] = useState<string>('0')

  useEffect(() => {
    getNftPrice()
    return () => setNftPrice('0')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getNftPrice = async () => {
    try {
      let data = await constant.ContractStore.methods.currentPrice().call()
      setNftPrice(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  return { details, nftPrice, setNftPrice }
}
