import React, { memo, useState } from 'react'
import { CardWrapper, Span, MyNftContent, CardModalWrapper, InputModal, InputModalUnit, SpanStatus3 } from './styled'
import type { CardType } from '@/hooks/data.d'
import { Image, Button, Row, Col, Modal, Divider, message } from 'antd'
import { Adapth5, formatStrAddress, validateValue } from '@/utils'
import { useWindowSizeHooks } from '@/hooks/useWindowSizeHooks'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import ConnectWallet from '@/components/ConnectWallet'
import { ImageClose, ModalTitle } from '@/components/ConnectWallet/styled'
import CLOSE from '@/assets/close.png'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import type { ConstantInitTypes } from '@/contracts/constantInit'
import Loading from '@/components/Loading'
import useDataHooks from '@/hooks/useDataHooks'
import { nftPriceIcon } from '@/contracts/init'

interface Type {
  details: CardType
  keys: string
  returnClick: (s: CardType) => void
  returnRefreshData: () => void
  returnBuyClcik: (s: CardType) => void
}

export default memo(function CardPage(pages: Type) {
  const context = useWeb3React<Web3Provider>()
  const { active } = context
  const myAddress = useSelector((state: any) => state.userInfo.address)

  const BallKingData: ConstantInitTypes = useDataHooks()
  const { constant, Footballer_ADDRESS, web3, Market_ADDRESS, minimumSaleAmount, uint } = BallKingData

  const { t } = useTranslation()

  const { details, returnClick, keys, returnRefreshData, returnBuyClcik } = pages
  const [onMynftShow, setOnMynftShow] = useState(false)
  const [isSellLoading, setIsSellloading] = useState(false)
  const [isCancelLoading, setIsCancelLoading] = useState(false)
  const [pledgeNumber, setPledgeNumber] = useState<any>('')

  const { windowSize } = useWindowSizeHooks()

  const switchClick = () => {
    if (keys === 'nft') {
      returnClick(details)
      return false
    }
  }

  const switchClickTwo = () => {
    if (keys === 'tradingFloor') {
      returnClick(details)
      return false
    }
  }

  /** my nft sell click */
  const sellClick = async () => {
    try {
      if (pledgeNumber === '') {
        message.warning({
          content: t('mynft.message.tips'),
          className: 'message-global',
        })
        return false
      }
      let isTrueNumber = validateValue(pledgeNumber)
      if (!isTrueNumber) {
        message.warning({
          content: t('mynft.message.tips1', { msg: minimumSaleAmount }),
          className: 'message-global',
        })
        return false
      }
      if (Number(pledgeNumber) < minimumSaleAmount) {
        message.warning({
          content: t('mynft.message.tips1', { msg: minimumSaleAmount }),
          className: 'message-global',
        })
        return false
      }
      console.log('pledgeNumber', pledgeNumber)
      setIsSellloading(true)
      let isAuthorize = await constant.ContractFootballer.methods.isApprovedForAll(myAddress, Market_ADDRESS).call()
      if (!isAuthorize) {
        constant.ContractFootballer.methods
          .setApprovalForAll(Market_ADDRESS, true)
          .send({
            from: myAddress,
          })
          .on('transactionHash', function (hash: any) {
            console.log(hash)
          })
          .on('receipt', async (receipt: any) => {
            sellImplement()
          })
          .on('error', function (error: any, receipt: any) {
            message.error({
              content: error.message,
              className: 'message-global',
            })
            console.log('error', error)
            setIsSellloading(false)
          })
      } else {
        sellImplement()
      }
    } catch (error) {
      console.log('error', error)
      setIsSellloading(false)
    }
  }

  /** Execute my nft sell */
  const sellImplement = async () => {
    let price = web3.utils.toWei(pledgeNumber, 'ether')
    console.log('price', price)
    console.log('details', details)
    try {
      constant.ContractMarket.methods
        .addGoods(Footballer_ADDRESS, details.tokenId, '1', '0x0000000000000000000000000000000000000000', price)
        .send({ from: myAddress })
        .on('transactionHash', function (hash: any) {
          console.log(hash)
        })
        .on('receipt', async (receipt: any) => {
          console.log('receipt', receipt)
          message.success({
            content: t('mynft.message.tips2'),
            className: 'message-global',
          })
          setIsSellloading(false)
          setOnMynftShow(false)
          setTimeout(() => {
            returnRefreshData()
          }, 1500)
        })
        .on('error', function (error: any, receipt: any) {
          message.error({
            content: error.message,
            className: 'message-global',
          })
          setIsSellloading(false)
        })
    } catch (error) {
      console.log('error', error)
    }
  }

  /** transaction building buy click */
  const buyClcik = () => returnBuyClcik(details)

  /** my nft cancel click */
  const cancelClick = async () => {
    console.log('date', details)
    setIsCancelLoading(true)
    let isAuthorize = await constant.ContractFootballer.methods.isApprovedForAll(myAddress, Market_ADDRESS).call()
    console.log('isAuthorize', isAuthorize)
    if (!isAuthorize) {
      constant.ContractFootballer.methods
        .setApprovalForAll(Market_ADDRESS, true)
        .send({
          from: myAddress,
        })
        .on('transactionHash', function (hash: any) {
          console.log(hash)
        })
        .on('receipt', async (receipt: any) => {
          cancelImplement()
        })
        .on('error', function (error: any, receipt: any) {
          message.error({
            content: error.message,
            className: 'message-global',
          })
          setIsSellloading(false)
        })
    } else {
      cancelImplement()
    }
  }

  /** my nft cancel Implement */
  const cancelImplement = async () => {
    try {
      constant.ContractMarket.methods
        .removeGoods(details.index)
        .send({ from: myAddress })
        .on('transactionHash', function (hash: any) {
          console.log(hash)
        })
        .on('receipt', async (receipt: any) => {
          console.log('receipt', receipt)
          message.success({
            content: t('mynft.message.tips3'),
            className: 'message-global',
          })
          setIsCancelLoading(false)
          returnRefreshData()
        })
        .on('error', function (error: any, receipt: any) {
          message.error({
            content: error.message,
            className: 'message-global',
          })
          setIsCancelLoading(false)
        })
    } catch (error) {
      console.log('err', error)
    }
  }

  return (
    <CardWrapper onClick={switchClick}>
      <div className="cardss">
        <Image src={details.image} className="card-img" preview={false} onClick={switchClickTwo} />
      </div>
      {keys === 'nft' && <Span>{details.name}</Span>}
      {keys === 'mynft' && (
        <>
          {details.status !== '2' && <Span>{details.name}</Span>}
          {details.status === '2' && (
            <SpanStatus3>
              <Row>
                <Col span={24} className="three-span" md={12}>
                  {details.name}
                </Col>
                <Col span={24} md={12}>
                  <div className="eth-span">
                    <Image src={nftPriceIcon[uint]} width="0.69rem"></Image>
                    <span style={{ marginLeft: '0.63rem' }}>
                      {BallKingData.toWeiFromWei(details.price)}&nbsp;
                      {uint}
                    </span>
                  </div>
                </Col>
              </Row>
            </SpanStatus3>
          )}
        </>
      )}
      {keys === 'tradingFloor' && (
        <>
          <div className={Adapth5 < windowSize.innerWidth ? 'divss' : 'divss dirce'} onClick={switchClickTwo}>
            <h5 title={`${details.nameTheme}-${details.name}`}>
              {details.nameTheme}-{details.name}
            </h5>
            <h5>{formatStrAddress(6, 4, details.address || '')}</h5>
          </div>
          <div className="divss dirce" onClick={switchClickTwo}>
            <h4 title={`${details.name}`}>{details.name}</h4>
            <h4>
              <Image src={nftPriceIcon[uint]} className="icosns" preview={false}></Image>
              {BallKingData.toWeiFromWei(details.price)}&nbsp;{uint}
            </h4>
          </div>
          <div className={Adapth5 < windowSize.innerWidth ? 'divss' : 'divss ssss-h5'} style={{ marginTop: '0' }}>
            {!active && <ConnectWallet status="buynow" />}
            {active && (
              <Button className="buy-now-btn" onClick={() => buyClcik()}>
                {t('trade.list.buy.now')}
              </Button>
            )}
          </div>
        </>
      )}
      {keys === 'mynft' && (
        <MyNftContent>
          {/* 
            { value: '1', lable: '可出售' },
            { value: '2', lable: '已出售' },
          */}
          {details.status === '1' && (
            <Row>
              <Col span={24}>
                <Button
                  className="mynft-btn-1 sells"
                  onClick={() => {
                    setOnMynftShow(true)
                    setPledgeNumber('')
                  }}
                >
                  {t('mynft.sell.btn')}
                </Button>
              </Col>
            </Row>
          )}
          {details.status === '2' && (
            <Row>
              <Col span={24}>
                {details.isSell && (
                  <Button className="mynft-btn-1" disabled>
                    {t('mynft.sell.btn.success')}
                  </Button>
                )}
                {!details.isSell && (
                  <Button className="mynft-btn-1" onClick={() => cancelClick()}>
                    {t('mynft.sell.cancel')}
                  </Button>
                )}
              </Col>
            </Row>
          )}
        </MyNftContent>
      )}
      <Modal
        visible={onMynftShow}
        className="modal-mask"
        footer={null}
        onCancel={() => setOnMynftShow(false)}
        width="38.75rem"
        closable={false}
      >
        <ImageClose src={CLOSE} className="modal-close" onClick={() => setOnMynftShow(false)} />
        <Row gutter={[16, 32]}>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <ModalTitle style={{ marginTop: '0.63rem' }}>{t('mynft.sell.modal.title')}</ModalTitle>
            <Divider style={{ marginBottom: 0 }} />
          </Col>
          <Col span={24} lg={10}>
            <CardModalWrapper>
              <Image src={details.image} className="card-modal-img" preview={false} />
              <Span>{details.name}</Span>
            </CardModalWrapper>
          </Col>
          <Col span={24} lg={14}>
            <div className="pledge-content">
              <div className="input-titles">
                <span>{t('mynft.sell.modal.input.title')}</span>
                <span style={{ color: '#FE5151' }}>
                  {t('mynft.sell.modal.input.title2', { msg: minimumSaleAmount.toFixed(6), uint: uint })}
                </span>
              </div>
              <InputModal
                placeholder={t('mynft.sell.modal.input.placeholder')}
                value={pledgeNumber}
                onChange={(e) => setPledgeNumber(e.target.value)}
              />
              <InputModalUnit>{uint}</InputModalUnit>
              <Button className="my-home-btn-3" onClick={() => sellClick()}>
                {t('mynft.sell.btn')}
              </Button>
            </div>
          </Col>
        </Row>
      </Modal>
      {isSellLoading && <Loading title="SellLoading" />}
      {isCancelLoading && <Loading />}
    </CardWrapper>
  )
})
