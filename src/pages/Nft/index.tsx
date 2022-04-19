import React, { memo, useState, useEffect } from 'react'
import { NftWrapper, TitlteRight, Title, NftTitle, NftList, CurrentThemeDiv, DescribeDiv, NftButtom } from './styled'
import { useNftHooks } from '@/hooks/useNftHooks'
import Card from '@/components/Card'
import { Pagination, Row, Col, Image, message, Button, Spin } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import { CardType } from '@/hooks/data'
import { Link, useHistory } from 'react-router-dom'
import { formatStrAddress } from '@/utils'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import NoData from '@/components/NoData'
import useDataHooks from '@/hooks/useDataHooks'
import type { ConstantInitTypes } from '@/contracts/constantInit'

const currentDetailsInit: CardType = {
  name: '',
  image: '',
  serialNumber: 0,
  tokenId: '',
}

export default memo(function NFTPage(props: any) {
  const { t } = useTranslation()
  const { cardList, loading } = useNftHooks()

  const { NFTAndTradeRule } = useSelector((state: any) => state.infoInfo)

  const [current, setCurent] = useState(1)
  const [currentStatus, setCurrentStatus] = useState<'list' | 'details'>('list')
  const [currentDetails, setCurrentDetails] = useState<CardType>(currentDetailsInit)

  const BallKingData: ConstantInitTypes = useDataHooks()
  const { nftPageSize, Blockchain } = BallKingData

  let history = useHistory()

  useEffect(() => {
    const search = props.location.search
    historySearchSwitch(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, cardList])

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const historySearchSwitch = (search: any) => {
    if (search && cardList.length !== 0) {
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
        let data = cardList.filter((item) => Number(item.serialNumber) === Number(list[0].value))
        if (data.length === 0) {
          message.error({
            content: t('nft.message.tips'),
            className: 'message-global',
          })
          setTimeout(() => {
            history.replace('/ballnft')
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

  return (
    <>
      <NftWrapper>
        {currentStatus === 'list' && (
          <>
            <NftTitle>
              <Title>
                <Link to={'/ballnft'}>{t('nft.title')}</Link>
              </Title>
              <TitlteRight>
                {t('nft.title.vice')}
                <span>&nbsp;&nbsp;{cardList.length}&nbsp;&nbsp;</span>
                {t('nft.title.vice.unit')}&nbsp;&nbsp;NFT
              </TitlteRight>
            </NftTitle>
            <Row className="content-nft">
              <Col span={24}>
                <NftList>
                  {!loading && (
                    <>
                      {cardList.length > 0 && (
                        <>
                          {cardList
                            // .filter((item) => item.serialNumber < current * 8 && item.serialNumber >= (current - 1) * 8)
                            .filter((item, i) => i < current * (nftPageSize || 16) && i >= (current - 1) * (nftPageSize || 16))
                            .map((item, i) => (
                              <div key={i} className="content-nft-info">
                                <Card
                                  details={item}
                                  returnRefreshData={() => {}}
                                  keys="nft"
                                  returnBuyClcik={(s) => {}}
                                  returnClick={(s) => history.replace(`/ballnft?key=${s.serialNumber}`)}
                                />
                              </div>
                            ))}
                        </>
                      )}
                      {cardList.length === 0 && <NoData />}
                    </>
                  )}
                  {loading && (
                    <div className="loadings">
                      <Spin tip="Loading..." />
                    </div>
                  )}
                </NftList>
                <div className="pagination-nft">
                  {cardList.length > 0 && !loading && (
                    <Pagination
                      showTitle={false}
                      defaultCurrent={current}
                      current={current}
                      defaultPageSize={nftPageSize || 16}
                      total={cardList.length}
                      showSizeChanger={false}
                      onChange={paginationChange}
                    />
                  )}
                </div>
              </Col>
            </Row>
            <NftButtom>
              <div className="content">
                <span>{t('nft.buttom.1')}</span>
                <span>{t('nft.buttom.2')}</span>
              </div>
            </NftButtom>
          </>
        )}
        {currentStatus === 'details' && (
          <>
            <NftTitle>
              <Title>
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    setCurrentStatus('list')
                    setCurrentDetails(currentDetailsInit)
                    setCurent(1)
                    history.replace('/ballnft')
                  }}
                >
                  {t('nft.title')}
                </div>
                <RightOutlined style={{ color: '#E8E9EE', fontSize: '1.75rem', margin: '0 1.38rem' }} />{' '}
                <span>{t('nft.details.title')}</span>
              </Title>
            </NftTitle>
            <div className="content-nft" style={{ marginBottom: '5.44rem' }}>
              <Row gutter={{ lg: 68, xs: 24 }} className="details-nft">
                <Col span={24} lg={12} md={8} className="details-nft-left">
                  <Image src={currentDetails.image} preview={false} />
                  <Button
                    className="my-home-btn-1 details-btns"
                    title={t('home.open.tips')}
                    onClick={() => {
                      message.info({
                        content: t('home.open.tips'),
                        className: 'message-global',
                      })
                    }}
                  >
                    {t('nft.details.open1')}
                  </Button>
                  <Button className="my-home-btn-1 details-btns" style={{ color: '#2F303B' }} onClick={() => history.replace('/blindbox')}>
                    {t('nft.details.open2')}
                  </Button>
                </Col>
                <Col span={24} lg={12} md={16} className="details-nft-right">
                  <CurrentThemeDiv>{t('nft.details.theme.title')}</CurrentThemeDiv>
                  <h2>
                    {currentDetails.nameTheme}-{currentDetails.name}
                  </h2>
                  <DescribeDiv>
                    <h3>{t('nft.details.vice.title1')}</h3>
                    <ul>
                      {NFTAndTradeRule.map((item: any, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </DescribeDiv>
                  <DescribeDiv>
                    <h3>{t('nft.details.vice.title2')}</h3>
                    <div className="info">
                      <div className="span">{t('nft.details.vice.title2.list1')}</div>
                      {formatStrAddress(6, 4, currentDetails.address || '')}
                    </div>
                    <div className="info">
                      <div className="span">{t('nft.details.vice.title2.list2')}</div>
                      {t('nft.details.vice.title2.list.info1')}
                    </div>
                    <div className="info">
                      <div className="span">{t('nft.details.vice.title2.list3')}</div>
                      {Blockchain}
                    </div>
                    <div className="info">
                      <div className="span">{t('nft.details.vice.title2.list4')}</div>
                      {t('nft.details.vice.title2.list.info3')}
                    </div>
                  </DescribeDiv>
                </Col>
              </Row>
            </div>
          </>
        )}
      </NftWrapper>
    </>
  )
})
