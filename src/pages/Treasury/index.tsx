import React, { memo, useEffect } from 'react'
import { TreasuryWrapper, TreasuryTitle, Title, TreasuryContent } from './styled'
import { Image } from 'antd'
import TREASURY_DEFAULT from '@/assets/treasury_default.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default memo(function TreasuryPage() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TreasuryWrapper>
      <TreasuryTitle>
        <Title>
          <Link to={'/treasury'}>{t('treasury.title')}</Link>
        </Title>
      </TreasuryTitle>
      <TreasuryContent>
        <Image src={TREASURY_DEFAULT} preview={false} width="26.56rem"></Image>
        <div className="span">
          {t('treasury.title.1')} <br />
          <span>{t('treasury.title')}</span>&nbsp;•&nbsp;{t('treasury.title.2')}
        </div>
      </TreasuryContent>
    </TreasuryWrapper>
  )
})
