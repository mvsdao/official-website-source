import React, { memo, useState, useEffect } from 'react'
import { Row, Col, Button, Modal, Divider, message, Statistic } from 'antd'
import { UserHomeWrapper, UserHomeTitle, Title, ContentTitle, GovernanceContent, ContentLi, InputModal, InputModalUnit } from './HomeStyled'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { formatStrAddress, validateValue } from '@/utils'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { ImageClose, ModalTitle } from '@/components/ConnectWallet/styled'
import CLOSE from '@/assets/close.png'
import { useTranslation } from 'react-i18next'

export default memo(function UserHomePage() {
  const { t } = useTranslation()
  const context = useWeb3React<Web3Provider>()
  const { active } = context
  const [onShow, setOnShow] = useState(false)
  const [number, setNumber] = useState<any>('')

  const myAddress = useSelector((state: any) => state.userInfo.address)

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const pledgeClick = async () => {
    if (number === '') {
      message.warning({
        content: t('myhome.message.tips'),
        className: 'message-global',
      })
      return false
    }
    let isTrueNumber = validateValue(number)
    if (!isTrueNumber) {
      message.warning({
        content: t('myhome.message.tips1'),
        className: 'message-global',
      })
      return false
    }
    console.log('number', number)
  }

  return (
    <UserHomeWrapper>
      <UserHomeTitle>
        <Title>
          <Link to={'/myhome'}>{t('myhome.title')}</Link>
        </Title>
      </UserHomeTitle>
      <Row className="details-home content-home">
        <Col className="details-home-content">
          <div className="content-top">
            <div className="top-left">{t('myhome.user.title')}</div>
            <div className="top-right">
              {t('myhome.vice.title1.link')}
              {active && <span>{formatStrAddress(6, 4, myAddress)}</span>} {!active && <span>-</span>}
            </div>
          </div>
          <div className="content-white">
            <ContentTitle>{t('myhome.vice.title1')}</ContentTitle>
            <div className="white-governance">
              {t('myhome.vice.title1.1')}
              <Statistic value={0} valueStyle={{ fontSize: '0.88rem' }} />
              &nbsp;&nbsp;MDO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {t('myhome.vice.title1.2')}
            </div>
            <GovernanceContent>
              <div className="content">
                <div className="span">
                  <Statistic value={0} valueStyle={{ fontSize: '2.25rem' }} />
                </div>
                <h5>MDO</h5>
                {/* <Button className="my-home-btn-1" onClick={() => setOnShow(true)}>
                  {t('myhome.vice.title1.btn')}
                </Button> */}
              </div>
            </GovernanceContent>
          </div>
          <div className="content-white">
            <ContentTitle style={{ borderBottom: 'none' }}>{t('myhome.vice.title2')}</ContentTitle>
            <ul>
              <li>
                {t('myhome.vice.title2.list1')}
                <ContentLi>
                  <span>{t('myhome.vice.title2.list1.1')}</span>
                  <span>{t('myhome.vice.title2.list1.2')}</span>
                  <span>{t('myhome.vice.title2.list1.3')}</span>
                </ContentLi>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Modal visible={onShow} className="modal-mask" footer={null} onCancel={() => setOnShow(false)} width="38.75rem" closable={false}>
        <ImageClose src={CLOSE} className="modal-close" onClick={() => setOnShow(false)} />
        <Row gutter={[16, 32]}>
          <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <ModalTitle style={{ marginTop: '0.63rem' }}>{t('myhome.vice.title1.modal.title')}</ModalTitle>
            <Divider />
            <div className="input-title">
              <span>{t('myhome.vice.title1.modal.title1')}</span>
              <span style={{ color: '#FE5151' }}>{t('myhome.vice.title1.modal.title2')}</span>
            </div>
            <InputModal
              placeholder={t('myhome.vice.title1.modal.input.placeholder')}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <InputModalUnit>MDO</InputModalUnit>
            <Button className="my-home-btn-2" onClick={pledgeClick}>
              {t('myhome.vice.title1.btn')}
            </Button>
          </Col>
        </Row>
      </Modal>
    </UserHomeWrapper>
  )
})
