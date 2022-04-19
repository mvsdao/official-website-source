import styled from 'styled-components'

export const TopBarWrapper = styled.div`
  width: 100%;
  height: 5rem;
  z-index: 999;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: fixed;
  top: 0;
  .tabbar {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
  .logo {
    width: 13.44rem;
    margin-left: 5.06rem;
  }
  .tabbar-right {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
`

export const H5TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  .logo {
    margin-left: 1.81rem;
  }
  .h5-topbar-right {
    display: flex;
    align-items: center;
    .iconss {
      font-size: 3rem;
      color: #373842;
      cursor: pointer;
      margin-right: 1.13rem;
      margin-left: 1.63rem;
    }
  }
`
