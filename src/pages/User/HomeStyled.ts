import styled from 'styled-components'
import LINK_ICON from '@/assets/link_icon.png'

export const UserHomeWrapper = styled.div`
  margin-top: 5rem;
  .content-home {
    margin: 3.13rem 14.25rem;
    padding: 1.25rem 2rem 0 2rem;
  }
  .details-home {
    background: #fbfbfd;
    .details-home-content {
      padding-top: 1.25rem;
      width: 100%;
    }
    .content-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin-bottom: 0.94rem;
      .top-left {
        width: 8.69rem;
        height: 3rem;
        background: #e7f6ff;
        border-radius: 1.5rem;
        font-size: 1.13rem;
        font-weight: 500;
        color: ${(props) => props.theme.themeColor};
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .top-right {
        font-size: 1rem;
        color: #2f303b;
        font-weight: 500;
        position: relative;
        ::after {
          content: '';
          position: absolute;
          left: -1.6rem;
          width: 1.44rem;
          height: 1.44rem;
          background: url(${LINK_ICON}) no-repeat;
          background-size: 100% 100%;
        }
        span {
          color: ${(props) => props.theme.themeColor};
        }
      }
    }
  }
  .content-white {
    width: 100%;
    min-height: 21.88rem;
    background: #ffffff;
    border: 0.06rem solid #e8e9ee;
    border-radius: 0.31rem;
    margin-bottom: 1.56rem;
    padding: 0 1.38rem;
    position: relative;
    .white-governance {
      font-size: 0.88rem;
      font-weight: 400;
      color: #2f303b;
      position: absolute;
      top: 1.74rem;
      left: 7.19rem;
      display: flex;
    }
    ul {
      li {
        margin-bottom: 2.5rem;
        font-size: 1rem;
        font-weight: 400;
        color: #2f303b;
        ::marker {
          color: #b7dcef;
        }
        :nth-child(1) {
          margin-bottom: 1.25rem;
        }
      }
    }
  }
  ${({ theme }) => theme.mediaWidth.screenXl`
    .content-home {
      margin: 3.13rem 8rem;
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenMd`
    .content-home {
      margin: 3.13rem 1.75rem;
    }
    .content-white {
      .white-governance {
        position: static;
        line-height: 2.5rem;
        .ant-statistic-content {
          line-height: 2.5rem;
        }
      }
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenSm`
    .content-home {
      margin: 3.13rem 1.75rem;
      padding: 1.25rem 1rem 0 1rem;
    }
  `}
`
export const UserHomeTitle = styled.div`
  height: 6.75rem;
  border-bottom: 0.06rem solid #e8e9ee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16.25rem;
  position: relative;
  ${({ theme }) => theme.mediaWidth.screenXl`
    padding: 0 10rem;
  `}
  ${({ theme }) => theme.mediaWidth.screenMd`
    padding: 0 3.75rem;
  `}
  ${({ theme }) => theme.mediaWidth.screenSm`
    padding: 0 1.88rem;
  `}
`

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #2f303b;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.88rem;
  a {
    color: #2f303b;
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    font-size: 2.31rem;
  `}
  ${({ theme }) => theme.mediaWidth.screenSm`
    font-size: 1.88rem;
  `}
`

export const ContentTitle = styled.div`
  height: 4.69rem;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 4.69rem;
  text-indent: 0.38rem;
  color: #2f303b;
  border-bottom: 1px solid #e8e9ee;
`

export const GovernanceContent = styled.div`
  min-height: 17.13rem;
  display: flex;
  flex-wrap: wrap;
  .content {
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    .span {
      font-size: 2.25rem;
      font-weight: 600;
      color: #2f303b;
      line-height: 3rem;
      margin-top: 3.31rem;
    }
    h5 {
      font-size: 1.5rem;
      font-weight: 400;
      color: #2f303b;
      margin-bottom: 3.13rem;
    }
  }
  ${({ theme }) => theme.mediaWidth.screenSm`
    .content {
      width: 100%;
    }
  `}
`

export const ContentLi = styled.div`
  padding: 1.25rem 0 1.25rem 4.96px;
  margin-top: 1.25rem;
  width: 80%;
  height: auto;
  background: #fbfbfd;
  border: 0.06rem solid #dbb262;
  border-radius: 0.63rem;
  display: flex;
  flex-direction: column;
  span {
    margin-left: 1.31rem;
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 2.25rem;
    color: #dc942e;
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    width: 100%;
    padding-right: 2rem;
  `}
`

export const InputModal = styled.input`
  width: calc(100% - 8.75rem);
  height: 4.25rem;
  background: #ffffff;
  border: 0.06rem solid #e8e9ee;
  border-radius: 2.13rem;
  padding: 0 2rem;
  padding-right: 5rem;
  font-size: 1rem;
  &:focus {
    border: 0.06rem solid #e8e9ee;
    box-shadow: none;
  }
  ${({ theme }) => theme.mediaWidth.screenLg`
    width: calc(100% - 3.75rem)
  `}
`

export const InputModalUnit = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.themeColor};
  position: absolute;
  top: 10.53rem;
  right: 5.63rem;
  ${({ theme }) => theme.mediaWidth.screenLg`
    top: 13.23rem;
    right: 6.63rem;
  `}
`
