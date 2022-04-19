import React, { memo, useState, useEffect } from 'react'
import { Pagination, Row, Col, Spin } from 'antd'
import { UserMyNftWrapper, TitleVice, StateList } from './MyNftStyled'
import { UserHomeTitle, Title } from './HomeStyled'
import { NftList } from '@/pages/Nft/styled'
import { Link } from 'react-router-dom'
import { statusOptions } from '@/contracts/init'
import { useMyNftHooks } from '@/hooks/useMyNftHooks'
import { useWindowSizeHooks } from '@/hooks/useWindowSizeHooks'
import { Adapth5 } from '@/utils'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Card from '@/components/Card'
import NoData from '@/components/NoData'
import { useTradingFloorHooks } from '@/hooks/useTradingFloorHooks'
import useDataHooks from '@/hooks/useDataHooks'
import type { ConstantInitTypes } from '@/contracts/constantInit'

export default memo(function UserMyNftPage() {
  const { t } = useTranslation()
  const { windowSize } = useWindowSizeHooks()

  const BallKingData: ConstantInitTypes = useDataHooks()
  const { myNftPageSize } = BallKingData

  const [activeStatus, setActiveStatus] = useState<string>('')
  const [current, setCurent] = useState(1)
  const [isRefreshData, setIsRefreshData] = useState(false)

  const myAddress = useSelector((state: any) => state.userInfo.address)
  const { tradList } = useTradingFloorHooks({ isRefreshData })
  const { myNftList, loading } = useMyNftHooks({ myAddress, isRefreshData, tradList })

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const paginationChange = (page: any, pageSize: any) => setCurent(page)

  return (
    <UserMyNftWrapper>
      <UserHomeTitle>
        <Title>
          <Link to={'/mynft'}>{t('mynft.title')}</Link>
        </Title>
        {windowSize.innerWidth >= Adapth5 && (
          <Row style={{ width: '75%', marginBottom: '-1.88rem' }}>
            <Col span={12}>
              <TitleVice>
                {activeStatus === '' && <>{t('mynft.title.vice')}&nbsp;&nbsp;</>}
                {activeStatus === '1' && <>{t('mynft.title.vice2')}&nbsp;&nbsp;</>}
                {activeStatus === '2' && <>{t('mynft.title.vice3')}&nbsp;&nbsp;</>}
                <span>
                  {
                    myNftList.filter((item) => {
                      if (activeStatus === '') {
                        return item.isSell !== true
                      } else {
                        if (activeStatus === '2') return item.status === activeStatus && item.isSell !== true
                        else return item.status === activeStatus
                      }
                    }).length
                  }
                </span>
                {activeStatus === '' && <>&nbsp;&nbsp;{t('mynft.title.vice.unit')}&nbsp;&nbsp;NFT</>}
                {activeStatus === '1' && <>&nbsp;&nbsp;{t('mynft.title.vice2.unit')}</>}
                {activeStatus === '2' && <>&nbsp;&nbsp;{t('mynft.title.vice3.unit')}</>}
              </TitleVice>
            </Col>
            <Col span={12}>
              <StateList>
                {statusOptions.map((item, i) => (
                  <div
                    className={item.value === activeStatus ? 'span active' : 'span'}
                    key={i}
                    onClick={() => {
                      setActiveStatus(item.value)
                      setCurent(1)
                    }}
                  >
                    {item.lable}
                  </div>
                ))}
              </StateList>
            </Col>
          </Row>
        )}
      </UserHomeTitle>
      {myAddress && (
        <Row className="content-nft">
          {windowSize.innerWidth < Adapth5 && (
            <Col span={24}>
              <StateList>
                {statusOptions.map((item, i) => (
                  <div
                    className={item.value === activeStatus ? 'span active' : 'span'}
                    key={i}
                    onClick={() => {
                      setActiveStatus(item.value)
                      setCurent(1)
                    }}
                  >
                    {item.lable}
                  </div>
                ))}
                <span></span>
              </StateList>
            </Col>
          )}
          {windowSize.innerWidth < Adapth5 && (
            <TitleVice>
              {activeStatus === '' && <>{t('mynft.title.vice')}&nbsp;&nbsp;</>}
              {activeStatus === '1' && <>{t('mynft.title.vice2')}&nbsp;&nbsp;</>}
              {activeStatus === '2' && <>{t('mynft.title.vice3')}&nbsp;&nbsp;</>}
              <span>
                {
                  myNftList.filter((item) => {
                    if (activeStatus === '') {
                      return item.isSell !== true
                    } else {
                      if (activeStatus === '2') return item.status === activeStatus && item.isSell !== true
                      else return item.status === activeStatus
                    }
                  }).length
                }
              </span>
              {activeStatus === '' && <>&nbsp;&nbsp;{t('mynft.title.vice.unit')}&nbsp;&nbsp;NFT</>}
              {activeStatus === '1' && <>&nbsp;&nbsp;{t('mynft.title.vice2.unit')}</>}
              {activeStatus === '2' && <>&nbsp;&nbsp;{t('mynft.title.vice3.unit')}</>}
            </TitleVice>
          )}
          <Col span={24}>
            <NftList>
              {!loading && (
                <>
                  {myNftList
                    .filter((item) => {
                      if (activeStatus === '') {
                        return item.isSell !== true
                      } else {
                        return item.status === activeStatus
                      }
                    })
                    .filter((item, i) => i < current * (myNftPageSize || 8) && i >= (current - 1) * (myNftPageSize || 8))
                    .map((item, i) => (
                      <div key={i} className="content-nft-info">
                        <Card
                          details={item}
                          keys="mynft"
                          returnBuyClcik={(s) => {}}
                          returnClick={(s) => {}}
                          returnRefreshData={() => setIsRefreshData(!isRefreshData)}
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
                myNftList.filter((item) => {
                  if (activeStatus === '') {
                    return item.isSell !== true
                  } else {
                    return item.status === activeStatus
                  }
                }).length === 0 && <NoData />}
            </NftList>
            <div className="pagination-nft">
              {myNftList.filter((item) => {
                if (activeStatus === '') {
                  return item.isSell !== true
                } else {
                  return item.status === activeStatus
                }
              }).length > 0 &&
                !loading && (
                  <Pagination
                    showTitle={false}
                    defaultCurrent={current}
                    current={current}
                    defaultPageSize={myNftPageSize || 8}
                    total={
                      myNftList.filter((item) => {
                        if (activeStatus === '') {
                          return item.isSell !== true
                        } else {
                          return item.status === activeStatus
                        }
                      }).length
                    }
                    showSizeChanger={false}
                    onChange={paginationChange}
                  />
                )}
            </div>
          </Col>
        </Row>
      )}
    </UserMyNftWrapper>
  )
})
