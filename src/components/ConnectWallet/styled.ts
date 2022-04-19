import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const ConnectWalletWrapper = styled.div``

export const Btn = styled.div`
  width: 9.38rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.themeColor};
  border: 0.06rem solid ${({ theme }) => theme.themeColor};
  ${({ theme }) => theme.mediaWidth.screenMd`
    font-size: 1.25rem;
  `}
`

export const ImageClose = styled.img`
  width: 2.38rem;
  height: 2.38rem;
  position: absolute;
  right: -0.56rem;
  top: -0.56rem;
  cursor: pointer;
`

export const ModalTitle = styled.div`
  font-size: 0.88rem;
  font-weight: 600;
  position: relative;
  text-indent: 2.5em;
  .span {
    position: absolute;
    left: 0;
    top: 0;
    width: 1.5rem;
    height: 1.5rem;
    text-indent: 0;
    text-align: center;
    border-radius: 100%;
    color: ${({ theme }) => theme.gray};
    background: ${({ theme }) => theme['gary-4']};
  }
  .choose-info {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.63rem 0;
    flex-direction: column;
    text-indent: 0;
    :hover {
      background: ${({ theme }) => theme['gary-4']};
    }
    .choose-span {
      font-size: 0.88rem;
      line-height: 2.5rem;
      font-weight: 400;
      color: ${({ theme }) => theme.gray};
    }
    .choose-icon {
      background: ${({ theme }) => theme.white};
    }
  }

  ${({ theme }) => theme.mediaWidth.screenMd`
    text-indent: 3.5em;
    font-size: 1rem;
    line-height: 2.5rem;
      .span{
        width: 2.5rem;
        height: 2.5rem;
      }
    `}
`

export const BtnActive = styled.div`
  width: 12.06rem;
  height: 3rem;
  background: #fbfbfd;
  border: 0.06rem solid #74778f;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  span {
    margin-right: 1.06rem;
    font-size: 1rem;
    font-weight: 500;
    color: #2f303b;
    margin-left: 1.68rem;
    ${({ theme }) => theme.mediaWidth.screenMd`
    margin-left: 0;
  `}
  }
  .headimg {
    width: 2.63rem;
    height: 2.63rem;
  }
  ${(props) =>
    props.theme.mediaWidth.screenXl(
      () => css`
        height: 3.38rem;
        font-size: 1rem;
        min-width: 3.25rem;
        border-radius: 0.31rem;
        border-color: transparent;
        background: #f5f5f5;
        .headimg {
          width: 2.38rem;
          height: 2.38rem;
        }
      `,
    )}
`

export const AccountMoveWrapper = styled.div`
  position: absolute;
  top: 2.9rem;
  width: 100%;
  height: auto;
  z-index: 100;
`

export const AccountContent = styled.div`
  width: 11.88rem;
  height: 10.5rem;
  background: #fff;
  border: 0.06rem solid #74778f;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 400;
  line-height: 3rem;
  a {
    color: #2f303b;
    font-weight: 400;
    &:hover {
      color: #2f303b;
      font-weight: bold;
    }
  }
`

const activeClassName = 'ACTIVE'
export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  font-size: 1rem;
  font-weight: 500;
  color: #2f303b;
  text-align: center;
  &.${activeClassName} {
    font-weight: 600 !important;
    color: #2f303b !important;
  }
  &:hover {
    content: none;
    color: #2f303b;
  }
`

export const NoChainIdTips = styled.div`
  position: fixed;
  top: 5rem;
  left: 0;
  width: 100%;
  z-index: 0;
  line-height: 3.38rem;
  height: 3.38rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 400;
  align-items: center;
  background: ${({ theme }) => `${theme.themeColor}`};
  color: ${({ theme }) => theme.white};
`

export const DivTest = styled.div`
  margin-top: 1.25rem;
  font-size: 0.88rem;
  line-height: 1.85rem;
  font-weight: 400;
  color: #80808b;
  span {
    color: #ff4d4f;
    margin-right: 0.25rem;
  }
`
