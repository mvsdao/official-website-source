import React, { memo, useEffect } from 'react'
import { GovernanceContent, GovernanceTitle, Title, GovernanceWrapper } from './styled'
import { Image } from 'antd'
import GOVERNANCE_DEFAULT from '@/assets/governance_default.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default memo(function TreasuryPage() {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <GovernanceWrapper>
      <GovernanceTitle>
        <Title>
          <Link to={'/governance'}>{t('governance.title')}</Link>
        </Title>
      </GovernanceTitle>
      <GovernanceContent>
        <Image src={GOVERNANCE_DEFAULT} preview={false} width="26.56rem"></Image>
        <div className="span">
          {t('governance.title.1')} <br />
          <span>{t('governance.title')}</span>&nbsp;•&nbsp;{t('governance.title.2')}
        </div>
      </GovernanceContent>
    </GovernanceWrapper>
  )
})
