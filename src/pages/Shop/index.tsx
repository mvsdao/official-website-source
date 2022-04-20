import React, { memo, useEffect, useState } from 'react'
import { Row, Col, Image, Button, Modal, Divider, message } from 'antd'
import { ShopWrapper, ShopTitle, Title, PriceDiv, ModalTitle, CardModalWrapper, Span } from './styled'
import { CurrentThemeDiv, DescribeDiv } from '@/pages/Nft/styled'
import { Link, useHistory } from 'react-router-dom'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { formatStrAddress } from '@/utils'
import ConnectWallet from '@/components/ConnectWallet'
import { useShopHooks } from '@/hooks/useShopHooks'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { ImageClose } from '@/components/ConnectWallet/styled'
import CLOSE from '@/assets/close.png'
import useContracts from '@/contracts'
import useDataHooks from '@/hooks/useDataHooks'
import Loading from '@/components/Loading'
import type { CardType } from '@/hooks/data.d'
import type { ConstantInitTypes } from '@/contracts/constantInit'
import { nftPriceIcon, nftPriceIconColor } from '@/contracts/init'

const detailsDataInit = {
  name: '',
  image: '',
  serialNumber: 0,
  tokenId: '',
}

export default memo(function ShopPage() {
  let history = useHistory()
  const { t } = useTranslation()

  const BallKingData: ConstantInitTypes = useDataHooks()
  const { constant, Blockchain, uint } = BallKingData

  const { web3 } = useContracts()
  const [onShow, setOnShow] = useState(false)
  const [isLoading, setIsloading] = useState(false)
  const [dataDetails, setDataDetails] = useState<CardType>(detailsDataInit)

  const context = useWeb3React<Web3Provider>()
  const { active } = context
  const { details, nftPrice, setNftPrice } = useShopHooks()
  const { shopBlindBoxRule, cardNftList } = useSelector((state: any) => state.infoInfo)
  const myAddress = useSelector((state: any) => state.userInfo.address)

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const buyNowClick = async () => {
    // setOnShow(true)
    /** Check balances */
    let balanceETH = await web3.eth.getBalance(myAddress)
    let balances = BallKingData.toWeiFromWei(balanceETH)
    let newPrice = await constant.ContractStore.methods.currentPrice().call()
    let currentPrice = nftPrice !== newPrice ? newPrice : nftPrice
    if (nftPrice !== newPrice) {
      setNftPrice(newPrice)
    }
    let prices = BallKingData.toWeiFromWei(currentPrice)
    if (Number(prices) > Number(balances)) {
      message.warning({
        content: `${t('shop.message.tip1', { uint: uint })} ${balances}`,
        className: 'message-global',
      })
      return false
    }
    setIsloading(true)
    buyNftBlindBoxImplement(currentPrice)
  }

  /** Execute Buy Blind Box */
  const buyNftBlindBoxImplement = async (price: string) => {
    constant.ContractStore.methods
      .purchase()
      .send({ from: myAddress, value: price })
      .on('transactionHash', function (hash: any) {
        console.log(hash)
      })
      .on('receipt', async (receipt: any) => {
        console.log('receipt', receipt)
        message.success({
          content: t('shop.buy.success'),
          className: 'message-global',
        })
        buyNowTransfer()
      })
      .on('error', function (error: any, receipt: any) {
        message.error({
          content: error.message,
          className: 'message-global',
        })
        console.log('购买error', error)
        setIsloading(false)
      })
  }

  /** Purchase successfully read Transfer */
  const buyNowTransfer = async () => {
    try {
      let endIndex = await constant.ContractFootballer.methods.balanceOf(myAddress).call()
      let data = endIndex === '0' ? [] : await constant.ContractFootballer.methods.ownedTokens(myAddress, 0, endIndex).call()
      let tokenId = data.length === 0 ? '' : data[data.length - 1]
      let cardNftObj = cardNftList.find((item: any) => Number(item.tokenId) === Number(tokenId))
      setDataDetails(cardNftObj)
      setOnShow(true)
      setIsloading(false)
    } catch (error) {
      setIsloading(false)
    }
  }

  return (
    <ShopWrapper>
      <ShopTitle>
        <Title>
          <Link to={'/foundry'}>{t('shop.title')}</Link>
        </Title>
      </ShopTitle>
      <div className="content-shop" style={{ marginBottom: '5.44rem' }}>
        <Row gutter={{ lg: 68, xs: 24 }} className="details-shop">
          <Col span={24} lg={12} md={8} className="details-shop-left">
            <Image src={details.image} preview={false} />
            <DescribeDiv style={{ marginTop: '0.81rem' }}>
              <h3>{t('shop.vice.title')}</h3>
              <div className="info">
                <div className="span">{t('shop.vice.title.list1')}</div>
                {formatStrAddress(6, 4, BallKingData.Store_ADDRESS || '')}
              </div>
              <div className="info">
                <div className="span">{t('shop.vice.title.list2')}</div>
                {t('shop.vice.title.list.info1')}
              </div>
              <div className="info">
                <div className="span">{t('shop.vice.title.list3')}</div>
                {Blockchain}
              </div>
              <div className="info">
                <div className="span">{t('shop.vice.title.list4')}</div>
                {t('shop.vice.title.list.info3')}
              </div>
            </DescribeDiv>
          </Col>
          <Col span={24} lg={12} md={16} className="details-shop-right">
            <CurrentThemeDiv>{t('shop.theme.title')}</CurrentThemeDiv>
            <h2>{details.name}</h2>
            <h4>
              {t('shop.theme.holder')}&nbsp;&nbsp;
              {formatStrAddress(6, 4, BallKingData.Store_ADDRESS || '')}
            </h4>
            <DescribeDiv>
              <h3>{t('shop.price.title')}</h3>
              <div className="price-content">
                <PriceDiv style={{ color: nftPriceIconColor[uint] }}>
                  <Image src={nftPriceIcon[uint]} width="1.81rem" preview={false}></Image>
                  {BallKingData.toWeiFromWei(nftPrice)}&nbsp;&nbsp;{uint}
                </PriceDiv>
                <h5>{t('shop.price.title.vice')}</h5>
                {!active && <ConnectWallet status="shop" />}
                {active && (
                  <Button className="my-home-btn-1 details-btns" onClick={buyNowClick}>
                    {t('shop.price.title.btn')}
                  </Button>
                )}
              </div>
            </DescribeDiv>
            <DescribeDiv>
              <h3>{t('shop.rule.title')}</h3>
              <ul>
                {shopBlindBoxRule.map((item: any, i: number) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </DescribeDiv>
          </Col>
        </Row>
      </div>
      <Modal visible={onShow} className="modal-mask" footer={null} onCancel={() => setOnShow(false)} width="38.75rem" closable={false}>
        <ImageClose src={CLOSE} className="modal-close" onClick={() => setOnShow(false)} />
        <Row gutter={[16, 32]}>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <ModalTitle style={{ marginTop: '0.63rem' }}>{t('shop.modal.title')}</ModalTitle>
            <Divider />
            <CardModalWrapper>
              <Image src={dataDetails.image} className="card-modal-img" preview={false} />
              <Span>
                {dataDetails.name}
                {dataDetails.serialNumber}
              </Span>
            </CardModalWrapper>
            <Button className="my-home-btn-1 shop-btn-modal" onClick={() => history.replace('/mynft')}>
              {t('shop.modal.btn1')}
            </Button>
            <Button className="my-home-btn-1 shop-btn-modal" style={{ marginBottom: 0, color: '#2F303B' }} onClick={() => setOnShow(false)}>
              {t('shop.modal.btn2')}
            </Button>
          </Col>
        </Row>
      </Modal>
      {isLoading && <Loading />}
    </ShopWrapper>
  )
})
