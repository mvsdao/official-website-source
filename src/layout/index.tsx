import React, { memo } from 'react'
import { LayoutWrapper, LayoutContent } from './styled'
import { renderRoutes } from 'react-router-config'
import { useHistory } from 'react-router-dom'
import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'

export default memo(function LayOutPages(props: any) {
  const { route } = props
  let history = useHistory()
  let pathname = history.location.pathname
  const { REACT_APP_ENV = 'prd' } = process.env

  return (
    <LayoutWrapper>
      {pathname !== '/home' && <TopBar></TopBar>}
      <LayoutContent>{route && renderRoutes(route.routes)}</LayoutContent>
      {REACT_APP_ENV !== 'prd' && <Footer />}
    </LayoutWrapper>
  )
})
