import React, { memo } from 'react'
import styled from 'styled-components'
// import { NavLink } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import { Image, message } from 'antd'
import { useTranslation } from 'react-i18next'
// import LOGO from '@/assets/logo_footer.png'

const FooterWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 3.56rem;
  .footer-content {
    font-size: 0.75rem;
    cursor: pointer;
    color: ${({ theme }) => theme.gray};
    position: relative;
    ::after {
      content: '';
      position: absolute;
      bottom: -0.31rem;
      left: 0;
      width: 100%;
      height: 0.06rem;
      background: ${({ theme }) => theme.gray};
    }
    ${({ theme }) => theme.mediaWidth.screenMd`
      font-size: 1.25rem;
      text-align: center;
    `}
  }
`

// const FooterMenu = styled.div`
//   background-color: #fff;
//   border-bottom: 0.06rem solid #74778f;
//   border-top: 0.06rem solid #74778f;
//   height: 9.75rem;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   .logo {
//     width: 9.19rem;
//   }
//   .logo-div {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   ${({ theme }) => theme.mediaWidth.screenMd`
//     .logo {
//       width: 9.19rem;
//     }
//   `}
// `

// const MenuList = styled.div`
//   display: flex;
//   .border-right {
//     width: 0.06rem;
//     height: 100%;
//     background-color: #363742;
//     margin-right: 1.88rem;
//   }
//   .border-left {
//     width: 0.06rem;
//     height: 100%;
//     background-color: #363742;
//     margin-left: 1.88rem;
//   }
//   ${({ theme }) => theme.mediaWidth.screenMd`
//     .border-right { margin-right: 1.25rem;}
//     .border-left { margin-left: 1.25rem;}
//   `}
// `

// const MenuListInfo = styled.div`
//   width: 20.63rem;
//   display: flex;
//   flex-wrap: wrap;
//   ${({ theme }) => theme.mediaWidth.screenMd`
//   width: calc(50% - 6.5rem);
//   `}
// `

// const activeClassName = 'ACTIVE'
// const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
//   font-size: 0.88rem;
//   font-weight: 400;
//   color: #2f303b;
//   width: 10.31rem;
//   height: 3.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   :nth-child(1),
//   :nth-child(2) {
//     border-bottom: 0.06rem solid #74778f;
//     margin-top: 1.375rem;
//   }
//   :nth-child(3),
//   :nth-child(4) {
//     margin-bottom: 1.375rem;
//   }
//   :nth-child(3) {
//     &:after {
//       content: '';
//       width: 1px;
//       height: 5px;
//       background: #74778f;
//       position: absolute;
//       right: 0;
//       top: 0;
//     }
//   }
//   :nth-child(1) {
//     &:after {
//       content: '';
//       width: 1px;
//       height: 5px;
//       background: #74778f;
//       position: absolute;
//       right: 0;
//       bottom: 0;
//     }
//   }
//   &.${activeClassName} {
//     font-weight: 600;
//     color: #2f303b !important;
//   }
//   &:hover {
//     content: none;
//     font-weight: 600;
//     color: #2f303b;
//   }
//   ${({ theme }) => theme.mediaWidth.screenMd`
//     font-size: 0.88rem;
//     font-weight: 400;
//     color: #2f303b;
//     width: 50%;
//     height: 3.5rem;
//     span {
//       width: 95%;
//       text-align: center;
//       overflow: hidden;
//       white-space: nowrap;
//       text-overflow: ellipsis;
//     }
//   `}
// `

export default memo(function FooterPages() {
  const { t } = useTranslation()

  // const oddEvent = (match: any, location: any) => {
  //   if (!match) {
  //     return false
  //   }
  //   const hash = location.hash
  //   if (hash === '#about') return true
  //   else return false
  // }

  return (
    <>
      {/* <FooterMenu>
        <MenuList>
          <MenuListInfo>
            <StyledNavLink to="/ballnft">
              <span>{t('menu.nft')}</span>
            </StyledNavLink>
            <StyledNavLink to="/blindbox">
              <span>{t('menu.shop')}</span>
            </StyledNavLink>
            <StyledNavLink to="/market">
              <span>{t('menu.trade')}</span>
            </StyledNavLink>
            <StyledNavLink to="/governance">
              <span>{t('menu.governance')}</span>
            </StyledNavLink>
          </MenuListInfo>
          <div className="border-right"></div>
          <div className="logo-div">
            <Image src={LOGO} className="logo" preview={false}></Image>
          </div>
          <div className="border-left"></div>
          <MenuListInfo>
            <StyledNavLink to="/market">
              <span>{t('menu.mvs')}</span>
            </StyledNavLink>
            <StyledNavLink to="/home#about" isActive={oddEvent}>
              <span>{t('menu.about')}</span>
            </StyledNavLink>
            <StyledNavLink
              to={{}}
              onClick={() => {
                message.info({
                  content: t('home.open.tips'),
                  className: 'message-global',
                })
              }}
            >
              <span>{t('menu.opensea')}</span>
            </StyledNavLink>
            <StyledNavLink
              to={{}}
              onClick={() => {
                message.info({
                  content: t('home.open.tips'),
                  className: 'message-global',
                })
              }}
            >
              <span>{t('menu.nft.poll')}</span>
            </StyledNavLink>
          </MenuListInfo>
        </MenuList>
      </FooterMenu> */}
      <FooterWrapper>
        <div className="footer-content" onClick={() => window.open('https://notdao.org')} title="https://notdao.org">
          {t('app.footer.copyright')}
        </div>
      </FooterWrapper>
    </>
  )
})
