import React, { memo, useState } from 'react'
import styled from 'styled-components'
import Icon from '@ant-design/icons'
import { ReactComponent as MessageSvg } from '@/assets/language.svg'
import { useTranslation } from 'react-i18next'
import { message } from 'antd'

const SwitchLanguageWrapper = styled.div`
  padding: 12px;
  float: right;
  cursor: pointer;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  z-index: 10;
  height: 38px;
  line-height: 38px;
  .language-tran {
    color: rgba(26, 26, 26, 0.5);
    :hover {
      color: ${({ theme }) => theme.black};
    }
  }
  .language-active {
    color: ${({ theme }) => theme.black};
  }
  .language-list-active {
    color: ${({ theme }) => theme.themeColor};
    background-color: rgba(26, 26, 26, 0.05);
  }
  ${({ theme }) => theme.mediaWidth.screenMd`margin-right: 10px;`}
`

const Language = styled.div`
  position: absolute;
  width: 100px;
  background: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 4px 0;
  position: absolute;
  top: 45px;
  right: 0;
  z-index: 10;
`

const LanguageList = styled.div`
  line-height: 40px;
  cursor: pointer;
  font-size: 14px;
  color: #1e1e1e;
  transition: all 0.3s;
  :hover {
    color: ${({ theme }) => theme.themeColor};
    background-color: rgba(26, 26, 26, 0.05);
  }
`
const LanguageLock = styled.div`
  position: absolute;
  top: 35px;
  right: 0;
  width: 120px;
  height: 10px;
  background: transparent;
`

export default memo(function SwitchLanguagePage() {
  const [move, setMoveSwitch] = useState(false)
  const { i18n, t } = useTranslation()

  const languageChange = (str: 'en' | 'zh') => i18n.changeLanguage(str)

  const languageChangeSwitch = (str: 'en' | 'zh') => {
    languageChange(str)
    // 'app.switch.language.tips': 'Switch {{msg}} Success',
    // message.info({
    //   content: t('app.switch.language.tips', { msg: str === 'zh' ? '中文' : 'English' }),
    //   className: 'message-global',
    // })
    setMoveSwitch(false)
  }

  return (
    <SwitchLanguageWrapper onMouseEnter={() => setMoveSwitch(true)} onMouseLeave={() => setMoveSwitch(false)}>
      <Icon component={MessageSvg} style={{ fontSize: '20px' }} className={move ? 'language-tran language-active' : 'language-tran'} />
      {move && (
        <>
          <LanguageLock></LanguageLock>
          <Language className="language-move">
            <LanguageList className={i18n.language === 'zh' ? 'language-list-active' : ''} onClick={() => languageChangeSwitch('zh')}>
              中文
            </LanguageList>
            <LanguageList className={i18n.language === 'en' ? 'language-list-active' : ''} onClick={() => languageChangeSwitch('en')}>
              English
            </LanguageList>
          </Language>
        </>
      )}
    </SwitchLanguageWrapper>
  )
})
