import React, { memo } from 'react'
import styled from 'styled-components'
import { Image } from 'antd'
import NO_DATA from '@/assets/no_data.png'
import { useTranslation } from 'react-i18next'

const NoDataWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    font-size: 1rem;
    font-weight: 600;
    color: #2f303b;
  }
`

interface Type {
  top?: number
}

export default memo(function NoDataPage(props: Type) {
  const { t } = useTranslation()

  const { top = 13 } = props

  return (
    <NoDataWrapper style={{ marginTop: top + 'rem' }}>
      <Image src={NO_DATA} preview={false} width="26.56rem" />
      <span>{t('app.no.data.title')}</span>
    </NoDataWrapper>
  )
})
