import React, { memo, useEffect, useState } from 'react'
import { RightOutlined } from '@ant-design/icons'
import { RightCircleOutlined, LeftCircleOutlined, CaretDownOutlined, CloseOutlined } from '@ant-design/icons'
import { Row, Col, Image, Button, InputNumber, Pagination, Drawer, Spin } from 'antd'
import { Link } from 'react-router-dom'
import {
  TradingFloorWrapper,
  TradingFloorLeft,
  TradingFloorContent,
  TradingFloorTitle,
  TitlteRight,
  Title,
  RightContent,
  SelectionDiv,
  RightTitle,
  ThemeList,
  PriceDivCard,
  customStyles,
  SelectionNumDiv,
  H5Bottom,
} from './styled'
import Loading from '@/components/Loading'
import { PriceDiv } from '@/pages/Shop/styled'
import { CurrentThemeDiv, DescribeDiv } from '@/pages/Nft/styled'
import { Adapth5 } from '@/utils'
import { NftList } from '@/pages/Nft/styled'
import SELECTION_ICON from '@/assets/selection_icon.png'
import Select, { components } from 'react-select'
import { message } from 'antd'
import { priceOptions } from '@/contracts/init'
import { useTradingFloorHooks } from '@/hooks/useTradingFloorHooks'
import Card from '@/components/Card'
import { useWindowSizeHooks } from '@/hooks/useWindowSizeHooks'
import { CardType } from '@/hooks/data'
import ConnectWallet from '@/components/ConnectWallet'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { formatStrAddress } from '@/utils'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import NoData from '@/components/NoData'
import type { ConstantInitTypes } from '@/contracts/constantInit'
import useDataHooks from '@/hooks/useDataHooks'
import { nftPriceIcon, nftPriceIconColor } from '@/contracts/init'

const currentDetailsInit: CardType = {
  name: '',
  image: '',
  serialNumber: 0,
  tokenId: '',
}

export default memo(function TradingFloorPage(props: any) {
  const context = useWeb3React<Web3Provider>()
  const { active } = context
  const { t } = useTranslation()
  let history = useHistory()

  const BallKingData: ConstantInitTypes = useDataHooks()
  const { web3, constant, tradePageSize, Blockchain, uint } = BallKingData

  const [currentDetails, setCurrentDetails] = useState<CardType>(currentDetailsInit)

  const [isShow, setIsShow] = useState(true)
  const [selectActive, setSelectActive] = useState<any>(null)
  const [priceNum, setPriceNum] = useState<{ min: number | undefined; max: number | undefined }>({ min: undefined, max: undefined })
  const [priceNumStatus, setPriceNumStatus] = useState(false)

  const [current, setCurent] = useState(1)
  const [currentStatus, setCurrentStatus] = useState<'list' | 'details'>('list')

  const [isRefreshData, setIsRefreshData] = useState(false)
  const [isLoading, setIsloading] = useState(false)

  const myAddress = useSelector((state: any) => state.userInfo.address)
  const { NFTAndTradeRule } = useSelector((state: any) => state.infoInfo)

  const { tradList, loading } = useTradingFloorHooks({ isRefreshData })
  const { windowSize } = useWindowSizeHooks()
  const [moveSwitch, setMoveSwitch] = useState(false)

  useEffect(() => {
    if (typeof priceNum.min !== 'number' && typeof priceNum.max !== 'number') {
      setPriceNumStatus(false)
    }
    if (typeof priceNum.min === 'number' && typeof priceNum.max === 'number') {
      if (priceNum.min > priceNum.max) {
        setPriceNum({
          min: priceNum.min,
          max: priceNum.min,
        })
      }
    }
  }, [priceNum])

  useEffect(() => {
    const search = props.location.search
    historySearchSwitch(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, tradList])

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const historySearchSwitch = (search: any) => {
    if (search && tradList.length !== 0) {
      let listSearch = search.slice(1).split('&')
      let list: { lable: string; value: any }[] = []
      listSearch.forEach((element: any) => {
        let objs = element.split('=')
        list.push({
          lable: objs[0],
          value: objs[1],
        })
      })
      if (list[0].lable === 'key' && list[0].value) {
        let data = tradList.filter((item) => item.serialNumber === list[0].value)
        if (data.length === 0) {
          message.error({
            content: t('trade.message.tips'),
            className: 'message-global',
          })
          setTimeout(() => {
            history.replace('/market')
          }, 500)
          return false
        }
        setCurrentStatus('details')
        setCurrentDetails(data[0])
      }
    } else {
      setCurrentStatus('list')
    }
  }

  const paginationChange = (page: any, pageSize: any) => setCurent(page)

  const reset = () => {
    setSelectActive(null)
    setPriceNum({ min: undefined, max: undefined })
    setPriceNumStatus(false)
  }

  const selectOnChange = (val: any) => setSelectActive(val)
  const applyClickNum = () => {
    if (typeof priceNum.min !== 'number' && typeof priceNum.max !== 'number') {
      message.warning({
        content: t('trade.message.tips1'),
        className: 'message-global',
      })
    } else if (typeof priceNum.min === 'number' && typeof priceNum.max === 'number') {
      if (priceNum.min > priceNum.max) {
        message.warning({
          content: t('trade.message.tips2'),
          className: 'message-global',
        })
      } else {
        setPriceNumStatus(true)
      }
    } else {
      setPriceNumStatus(true)
    }
  }

  const applyClickNumH5 = () => {
    let min_number: any = document.getElementsByName('min_number')
    let max_number: any = document.getElementsByName('max_number')
    let min = min_number[0].value ? Number(min_number[0].value) : undefined
    let max = max_number[0].value ? Number(max_number[0].value) : undefined
    setPriceNum({ min, max })
    if (typeof min !== 'number' && typeof max !== 'number') {
      message.warning({
        content: t('trade.message.tips1'),
        className: 'message-global',
      })
    } else if (typeof min === 'number' && typeof max === 'number') {
      if (min > max) {
        message.warning({
          content: t('trade.message.tips2'),
          className: 'message-global',
        })
      } else {
        setMoveSwitch(false)
        window.scrollTo(0, 0)
        setPriceNumStatus(true)
      }
    } else {
      setMoveSwitch(false)
      window.scrollTo(0, 0)
      setPriceNumStatus(true)
    }
  }

  const buyClcik = async (obj?: CardType) => {
    let params = obj ? obj : currentDetails
    if (myAddress.toLowerCase() === (params.address as any).toLowerCase()) {
      message.warning({
        content: t('trade.message.tips3'),
        className: 'message-global',
      })
      return false
    }
    let balanceETH = await web3.eth.getBalance(myAddress)
    let balances = BallKingData.toWeiFromWei(balanceETH)
    let prices = BallKingData.toWeiFromWei(params.price)
    if (Number(prices) > Number(balances)) {
      message.warning({
        content: `${t('trade.message.tips4', { msg: uint })} ${balances}`,
        className: 'message-global',
      })
      return false
    }
    setIsloading(true)
    buyNftImplement(params)
  }

  /** Execute Buy Market nft */
  const buyNftImplement = async (obj: CardType) => {
    console.log('obj', obj)
    constant.ContractMarket.methods
      .purchase(obj.index)
      .send({ from: myAddress, value: obj.price })
      .on('transactionHash', function (hash: any) {
        console.log(hash)
      })
      .on('receipt', async (receipt: any) => {
        console.log('receipt', receipt)
        message.success({
          content: t('trade.buy.success'),
          className: 'message-global',
        })
        setIsRefreshData(!isRefreshData)
        setIsloading(false)
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

  const DropdownIndicator = (props: any) => (
    <components.DropdownIndicator {...props}>
      <CaretDownOutlined style={{ color: '#C1C2C6' }} />
    </components.DropdownIndicator>
  )

  const H5Trading = () => {
    return (
      <Drawer
        height="80vh"
        key="TradingFloorH5"
        className="drawer-trading"
        placement="bottom"
        onClose={() => setMoveSwitch(false)}
        visible={moveSwitch}
      >
        <RightContent style={{ paddingTop: '0' }}>
          <SelectionDiv>
            <div>
              <Image src={SELECTION_ICON} width="1.48rem" preview={false}></Image>
              <span>{t('trade.left.title')}</span>
            </div>
          </SelectionDiv>
          <Button className="reset-btn" onClick={() => reset()}>
            {t('trade.left.reset')}
          </Button>

          <RightTitle>{t('trade.left.title.vice1')}</RightTitle>
          <ThemeList>{t('trade.left.title.vice1.theme')}</ThemeList>

          <RightTitle>{t('trade.left.title.vice2')}</RightTitle>
          <PriceDivCard>
            <Image src={nftPriceIcon[uint]} width="auto" height="1.63rem" preview={false}></Image>
            <span title={`${Blockchain}(${uint})`}>
              {Blockchain}({uint})
            </span>
          </PriceDivCard>
          <Row className="price-number">
            <Col span={11}>
              <InputNumber type="number" precision={6} placeholder="MIN" min={0} name="min_number" defaultValue={priceNum.min} />
            </Col>
            <Col span={2} className="price-num-to">
              to
            </Col>
            <Col span={11}>
              <InputNumber type="number" precision={6} placeholder="MAX" min={0} name="max_number" defaultValue={priceNum.max} />
            </Col>
          </Row>
          <Button className="apply-btn" onClick={applyClickNumH5}>
            {t('trade.left.title.vice2.btn')}
          </Button>
        </RightContent>
      </Drawer>
    )
  }

  return (
    <TradingFloorWrapper>
      {currentStatus === 'list' && (
        <>
          {windowSize.innerWidth < Adapth5 && (
            <>
              <H5Bottom>
                <Button className="su-btn" onClick={() => setMoveSwitch(true)}>
                  {t('trade.left.title')}
                </Button>
              </H5Bottom>
              <H5Trading />
            </>
          )}
          <Row>
            {windowSize.innerWidth >= Adapth5 && (
              <Col span={isShow ? 8 : 2} lg={isShow ? 4 : 1} md={isShow ? 6 : 2} className={isShow ? 'left' : ''}>
                <TradingFloorLeft>
                  {!isShow && <RightCircleOutlined className="left-icon" onClick={() => setIsShow(true)} />}
                  {isShow && (
                    <RightContent>
                      <SelectionDiv>
                        <div>
                          <Image src={SELECTION_ICON} width="1.48rem" preview={false}></Image>
                          <span>{t('trade.left.title')}</span>
                        </div>
                        <LeftCircleOutlined className="left-active-icon" onClick={() => setIsShow(false)} />
                      </SelectionDiv>
                      <Button className="reset-btn" onClick={() => reset()}>
                        {t('trade.left.reset')}
                      </Button>

                      <RightTitle>{t('trade.left.title.vice1')}</RightTitle>
                      <ThemeList>{t('trade.left.title.vice1.theme')}</ThemeList>

                      <RightTitle>{t('trade.left.title.vice2')}</RightTitle>
                      <PriceDivCard>
                        <Image src={nftPriceIcon[uint]} width="auto" height="1.63rem" preview={false}></Image>
                        <span title={`${Blockchain}(${uint})`}>
                          {Blockchain}({uint})
                        </span>
                      </PriceDivCard>
                      <Row className="price-number">
                        <Col span={11}>
                          <InputNumber
                            type="number"
                            precision={6}
                            placeholder="MIN"
                            min={0}
                            value={priceNum.min}
                            onChange={(s) => setPriceNum({ ...priceNum, min: s })}
                          />
                        </Col>
                        <Col span={2} className="price-num-to">
                          to
                        </Col>
                        <Col span={11}>
                          <InputNumber
                            type="number"
                            precision={6}
                            placeholder="MAX"
                            min={priceNum.min}
                            onChange={(s) => setPriceNum({ ...priceNum, max: s })}
                            value={priceNum.max}
                          />
                        </Col>
                      </Row>
                      <Button className="apply-btn" onClick={applyClickNum}>
                        {t('trade.left.title.vice2.btn')}
                      </Button>
                    </RightContent>
                  )}
                </TradingFloorLeft>
              </Col>
            )}

            <Col span={24} lg={isShow ? 20 : 23} md={isShow ? 18 : 22}>
              <TradingFloorTitle active={isShow}>
                <Title>
                  <Link to={'/market'}>{t('trade.title')}</Link>
                </Title>
                <TitlteRight>
                  {priceNumStatus && (
                    <SelectionNumDiv>
                      <div>
                        <Image src={nftPriceIcon[uint]} className="icons" preview={false}></Image>
                        {uint}:&nbsp;&nbsp;
                        {typeof priceNum.min === 'number' && typeof priceNum.max === 'number' && (
                          <>
                            <span>{priceNum.min}</span>-<span>{priceNum.max}</span>
                          </>
                        )}
                        {typeof priceNum.min === 'number' && typeof priceNum.max !== 'number' && (
                          <>
                            {'>='}
                            <span>{priceNum.min}</span>
                          </>
                        )}{' '}
                        {typeof priceNum.min !== 'number' && typeof priceNum.max === 'number' && (
                          <>
                            {'<='}
                            <span>{priceNum.max}</span>
                          </>
                        )}
                      </div>

                      <CloseOutlined
                        className="right-icons"
                        onClick={() => {
                          setPriceNum({ min: undefined, max: undefined })
                          setPriceNumStatus(false)
                        }}
                      />
                    </SelectionNumDiv>
                  )}
                  <Select
                    styles={customStyles}
                    isSearchable={false}
                    options={priceOptions}
                    placeholder={t('trade.input.placeholder')}
                    onChange={selectOnChange}
                    value={selectActive}
                    components={{ DropdownIndicator }}
                  />
                </TitlteRight>
              </TradingFloorTitle>
              <TradingFloorContent active={isShow}>
                <div className="content-nft">
                  <NftList>
                    {!loading && (
                      <>
                        {tradList
                          .filter((item) => {
                            if (priceNumStatus) {
                              if (priceNum.min && priceNum.max)
                                return (
                                  Number(BallKingData.toWeiFromWei(item.price)) >= priceNum.min &&
                                  Number(BallKingData.toWeiFromWei(item.price)) <= priceNum.max
                                )
                              else if (priceNum.min) return Number(BallKingData.toWeiFromWei(item.price)) >= priceNum.min
                              else if (priceNum.max) return Number(BallKingData.toWeiFromWei(item.price)) <= priceNum.max
                              else return true
                            } else return true
                          })
                          .sort((a: any, b: any) => {
                            if (selectActive === null) {
                              return 0
                            } else {
                              if (selectActive.value === 'ascend') {
                                return a.price - b.price
                              } else {
                                return b.price - a.price
                              }
                            }
                          })
                          .filter((item, i) => i < current * (tradePageSize || 16) && i >= (current - 1) * (tradePageSize || 16))
                          .map((item, i) => (
                            <div key={i} className="content-nft-info">
                              <Card
                                details={item}
                                keys="tradingFloor"
                                returnRefreshData={() => {}}
                                returnClick={(s) => history.replace(`/market?key=${s.serialNumber}`)}
                                returnBuyClcik={(s) => buyClcik(s)}
                              />
                            </div>
                          ))}
                      </>
                    )}
                    {loading && (
                      <div className="loadings">
                        <Spin tip="Loading..." />
                      </div>
                    )}
                    {!loading &&
                      tradList
                        .filter((item) => {
                          if (priceNumStatus) {
                            if (priceNum.min && priceNum.max)
                              return (
                                Number(BallKingData.toWeiFromWei(item.price)) >= priceNum.min &&
                                Number(BallKingData.toWeiFromWei(item.price)) <= priceNum.max
                              )
                            else if (priceNum.min) return Number(BallKingData.toWeiFromWei(item.price)) >= priceNum.min
                            else if (priceNum.max) return Number(BallKingData.toWeiFromWei(item.price)) <= priceNum.max
                            else return true
                          } else return true
                        })
                        .sort((a: any, b: any) => {
                          if (selectActive === null) {
                            return 0
                          } else {
                            if (selectActive.value === 'ascend') {
                              return a.price - b.price
                            } else {
                              return b.price - a.price
                            }
                          }
                        }).length === 0 && <NoData top={6} />}
                  </NftList>
                </div>
                <div className="pagination-nft">
                  {tradList
                    .filter((item) => {
                      if (priceNumStatus) {
                        if (priceNum.min && priceNum.max)
                          return (
                            Number(BallKingData.toWeiFromWei(item.price)) >= priceNum.min &&
                            Number(BallKingData.toWeiFromWei(item.price)) <= priceNum.max
                          )
                        else if (priceNum.min) return Number(BallKingData.toWeiFromWei(item.price)) >= priceNum.min
                        else if (priceNum.max) return Number(BallKingData.toWeiFromWei(item.price)) <= priceNum.max
                        else return true
                      } else return true
                    })
                    .sort((a: any, b: any) => {
                      if (selectActive === null) {
                        return 0
                      } else {
                        if (selectActive.value === 'ascend') {
                          return a.price - b.price
                        } else {
                          return b.price - a.price
                        }
                      }
                    }).length > 0 &&
                    !loading && (
                      <Pagination
                        showTitle={false}
                        current={current}
                        defaultCurrent={current}
                        defaultPageSize={tradePageSize || 16}
                        total={
                          tradList
                            .filter((item) => {
                              if (priceNumStatus) {
                                if (priceNum.min && priceNum.max)
                                  return (
                                    Number(BallKingData.toWeiFromWei(item.price)) >= priceNum.min &&
                                    Number(BallKingData.toWeiFromWei(item.price)) <= priceNum.max
                                  )
                                else if (priceNum.min) return Number(BallKingData.toWeiFromWei(item.price)) >= priceNum.min
                                else if (priceNum.max) return Number(BallKingData.toWeiFromWei(item.price)) <= priceNum.max
                                else return true
                              } else return true
                            })
                            .sort((a: any, b: any) => {
                              if (selectActive === null) {
                                return 0
                              } else {
                                if (selectActive.value === 'ascend') {
                                  return a.price - b.price
                                } else {
                                  return b.price - a.price
                                }
                              }
                            }).length
                        }
                        showSizeChanger={false}
                        onChange={paginationChange}
                      />
                    )}
                </div>
              </TradingFloorContent>
            </Col>
          </Row>
        </>
      )}
      {currentStatus === 'details' && (
        <>
          <TradingFloorTitle active={false}>
            <Title>
              <div
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setCurrentStatus('list')
                  setCurrentDetails(currentDetailsInit)
                  setCurent(1)
                  history.replace('/market')
                }}
              >
                {t('trade.title')}
              </div>
              <RightOutlined style={{ color: '#E8E9EE', fontSize: '1.75rem', margin: '0 1.38rem' }} />{' '}
              <span>{t('trade.details.title')}</span>
            </Title>
          </TradingFloorTitle>
          <div className="content-shop" style={{ marginBottom: '5.44rem' }}>
            <Row gutter={{ lg: 68, xs: 24 }} className="details-shop">
              <Col span={24} lg={12} md={8} className="details-shop-left">
                <Image src={currentDetails.image} preview={false} />
                <DescribeDiv style={{ marginTop: '0.81rem' }}>
                  <h3>{t('trade.details.vice.title2')}</h3>
                  <div className="info">
                    <div className="span">{t('trade.details.vice.title2.list1')}</div>
                    {formatStrAddress(6, 4, currentDetails.collection || '')}
                  </div>
                  <div className="info">
                    <div className="span">{t('trade.details.vice.title2.list2')}</div>
                    {t('trade.details.vice.title2.list.info1')}
                  </div>
                  <div className="info">
                    <div className="span">{t('trade.details.vice.title2.list3')}</div>
                    {Blockchain}
                  </div>
                  <div className="info">
                    <div className="span">{t('trade.details.vice.title2.list4')}</div>
                    {t('trade.details.vice.title2.list.info3')}
                  </div>
                </DescribeDiv>
              </Col>
              <Col span={24} lg={12} md={16} className="details-shop-right">
                <CurrentThemeDiv>{t('trade.details.theme.title')}</CurrentThemeDiv>
                <h2>
                  {currentDetails.nameTheme}-{currentDetails.name}
                </h2>
                <h4>
                  {t('trade.details.theme.hold')}&nbsp;&nbsp;{formatStrAddress(6, 4, currentDetails.address || '')}
                </h4>
                <DescribeDiv>
                  <h3>{t('trade.details.price.title')}</h3>
                  <div className="price-content">
                    <PriceDiv style={{ color: nftPriceIconColor[uint] }}>
                      <Image src={nftPriceIcon[uint]} width="1.81rem" preview={false}></Image>
                      {BallKingData.toWeiFromWei(currentDetails.price)}&nbsp;&nbsp;{uint}
                    </PriceDiv>
                    <h5>{t('trade.details.price.title.vice')}</h5>
                    {!active && <ConnectWallet status="shop" />}
                    {active && (
                      <Button className="my-home-btn-1 details-btns" onClick={() => buyClcik()}>
                        {t('trade.details.price.btn')}
                      </Button>
                    )}
                  </div>
                </DescribeDiv>
                <DescribeDiv>
                  <h3>{t('trade.details.vice.title1')}</h3>
                  <ul>
                    {NFTAndTradeRule.map((item: any, i: number) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </DescribeDiv>
              </Col>
            </Row>
          </div>
        </>
      )}
      {isLoading && <Loading title="Purchasing" />}
    </TradingFloorWrapper>
  )
})
