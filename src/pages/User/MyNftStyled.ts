import styled from 'styled-components'

export const UserMyNftWrapper = styled.div`
  margin-top: 5rem;
  .pagination-nft {
    height: 8.31rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-pagination-item,
    .ant-pagination-item-link {
      border-radius: 0.25rem;
    }
  }
  .content-nft {
    background: #fbfbfd;
    margin: 3.13rem 14.25rem;
    padding: 1.25rem 2rem 0 2rem;
  }
  .content-nft-info {
    width: 25%;
    display: flex;
    justify-content: center;
    ${({ theme }) => theme.mediaWidth.screenMd`
      width: 50%;
    `}
    ${({ theme }) => theme.mediaWidth.screenLg`
      width: 33%;
    `}
    ${({ theme }) => theme.mediaWidth.screenSm`
      width: 50%;
    `}
  }
  ${({ theme }) => theme.mediaWidth.screenXl`
    .content-nft {
      margin: 3.13rem 8rem;
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenMd`
    .content-nft {
      margin: 3.13rem 1.75rem;
      
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenSm`
    .content-nft {
      margin: 3.13rem 1.88rem;
      padding: 1.25rem 0 0 0 ;
    }
  `}
`

export const TitleVice = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #2f303b;
  span {
    color: ${(props) => props.theme.themeColor};
  }
  ${({ theme }) => theme.mediaWidth.screenSm`
    padding: 0 1.25rem;
    height: 3rem;
    line-height: 3rem;
    margin-bottom: 1.25rem;
  `}
`

export const StateList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  .span {
    font-size: 1.13rem;
    font-weight: 400;
    color: #2f303b;
    line-height: 1.88rem;
    margin-right: 1.25rem;
    cursor: pointer;
  }
  .span.active {
    font-weight: bold;
  }
  ${({ theme }) => theme.mediaWidth.screenSm`
    .span {
      font-size: 1.5rem;
    }
    padding: 0 1.25rem;
    height: 4rem;
    border-bottom: 0.06rem solid #e8e9ee;
  `}
`
