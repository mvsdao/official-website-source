import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const SideMenuWrapper = styled.div<{ active: boolean }>`
  display: flex;
  .fours {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    a {
      width: 50%;
      text-align: center;
    }
  }
`

const activeClassName = 'ACTIVE'
export const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  color: #2f303b;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .navlink-content {
    font-size: 0.75rem;
    line-height: 1.5rem;
    padding: 0 1.63rem;
    color: #2f303b;
  }
  .navlink-title {
    font-size: 1rem;
    font-weight: bold;
    color: #2f303b;
    line-height: 1.5rem;
    padding: 0 1.63rem;
  }
  .navlink-child-title {
    font-size: 1rem;
    color: #2f303b;
    padding: 0 1.63rem;
    &:hover {
      color: #363639 !important;
      font-weight: 600;
      content: none;
    }
  }
  &.${activeClassName} {
    color: #363639;
    font-weight: 600;
    .navlink-child-title {
      color: #363639;
      font-weight: 600;
    }
  }
  &:hover {
    color: #363639 !important;
    font-weight: 600;
    content: none;
  }
`

export const SideMenuList = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: 1400px) {
    justify-content: start;
  }
`

export const ListInfo = styled.div`
  font-size: 1rem;
  font-weight: 500;
  width: auto;
  margin-right: 1.88rem;
  color: #5f6469;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  .span {
    margin-right: 0.38rem;
    max-width: 90%;
    overflow: hidden;
    line-height: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  &:nth-child(4) {
    margin-right: 0;
  }
  ${(props) =>
    props.theme.mediaWidth.screenXl(
      () => css`
        margin-right: 1.25rem;
      `,
    )}
  ${({ theme }) =>
    theme.mediaWidth.screenLg(
      () => css`
        width: calc(25% - 1rem);
        margin-right: 1rem;
      `,
    )}
`

export const MoveSideMenu = styled.div`
  .active-two {
    background: ${({ theme }) => theme.themeColor}32;
  }
`
