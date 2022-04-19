import { Result, Button, Image } from 'antd'
import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import NO from '@/assets/404.png'
import { useTranslation } from 'react-i18next'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default memo(function No404() {
  let history = useHistory()
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Result
        icon={<Image src={NO} preview={false} />}
        subTitle={t('app.404.title')}
        extra={
          <Button className="back-home-btn" onClick={() => history.replace('/home')}>
            {t('app.404.btn')}
          </Button>
        }
      />
    </Wrapper>
  )
})
