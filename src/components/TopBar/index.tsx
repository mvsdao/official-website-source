import React, { memo } from 'react'
import { TopBarWrapper, H5TopBar } from './styled'
import { Row, Col, Image } from 'antd'
import LOGO from '@/assets/logo.png'
import { Link } from 'react-router-dom'
import { AdaptFontSize } from '@/utils'
import { useWindowSizeHooks } from '@/hooks/useWindowSizeHooks'
import SideMenu from '@/components/SideMenu'
import SideMenuH5 from '@/components/SideMenuH5'
import ConnectWallet from '@/components/ConnectWallet'
import SelectNetWork from '@/components/SelectNetWork'

interface Type {
  background?: string
  isHome?: boolean
  boxShadow?: string
}

export default memo(function TopBarPages(props: Type) {
  const { background = '#FFFFFF', isHome = false, boxShadow = '0rem 0.19rem 0.63rem 0rem rgba(49, 50, 69, 0.1)' } = props
  const { windowSize } = useWindowSizeHooks()

  return (
    <TopBarWrapper style={{ background, boxShadow }}>
      {windowSize.innerWidth > AdaptFontSize && (
        <Row className="tabbar" gutter={20}>
          <Col sm={6}>
            <Link to="/home">
              {!isHome && <Image src={LOGO} className="logo" preview={false} />}
              {isHome && <Image src={LOGO} className="logo" preview={false} />}
            </Link>
          </Col>
          <Col sm={17} className="tabbar-right">
            <ConnectWallet />
            <SelectNetWork />
            <SideMenu />
          </Col>
          <Col span={1}></Col>
        </Row>
      )}
      {windowSize.innerWidth <= AdaptFontSize && (
        <H5TopBar>
          <Link to="/home">
            {!isHome && <Image src={LOGO} className="logo" preview={false} />}
            {isHome && <Image src={LOGO} className="logo" preview={false} />}
          </Link>
          <div className="h5-topbar-right">
            <SelectNetWork />
            <ConnectWallet />
            <SideMenuH5 />
          </div>
        </H5TopBar>
      )}
    </TopBarWrapper>
  )
})
