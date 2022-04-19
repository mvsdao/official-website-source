import styled from 'styled-components'

export const NftWrapper = styled.div`
  margin-top: 5rem;
  .content-nft {
    margin: 3.13rem 14.25rem 0;
  }
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
  .details-nft {
    background: #fbfbfd;
    .details-nft-left {
      display: flex;
      align-items: center;
      padding-top: 1.25rem;
      flex-direction: column;
      .ant-image {
        width: 90%;
        border-radius: 0.31rem;
        height: auto;
      }
    }
    .details-nft-right {
      display: flex;
      flex-direction: column;
      padding-top: 1.25rem;
      h2 {
        font-size: 1.88rem;
        margin: 1.69rem 0;
        font-weight: 700;
      }
    }
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
      margin: 3.13rem 8rem 0;
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenMd`
    .content-nft {
      margin: 3.13rem 1.75rem 0;
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenSm`
    .content-nft {
      margin: 3.13rem 1.88rem 0;
    }
  `}
`

export const NftTitle = styled.div`
  height: 6.75rem;
  border-bottom: 0.06rem solid #e8e9ee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16.25rem;
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
  font-size: 2.63rem;
  font-weight: 600;
  color: #2f303b;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.88rem;
  a {
    color: #2f303b;
  }
  span {
    font-size: 3rem;
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    font-size: 2.31rem;
    span {
      font-size: 2.31rem;
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenSm`
    font-size: 1.88rem;
    span {
      font-size: 1.88rem;
    }
  `}
`

export const TitlteRight = styled.div`
  font-size: 1.13rem;
  font-weight: 400;
  color: #787a82;
  span {
    font-weight: 600;
    color: #fac432;
  }
`

export const NftList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const CurrentThemeDiv = styled.div`
  width: 18.81rem;
  height: 3rem;
  background: #e7f6ff;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.13rem;
  font-weight: 500;
  color: ${(props) => props.theme.themeColor};
`

export const DescribeDiv = styled.div`
  width: 100%;
  min-height: 21.06rem;
  background: #ffffff;
  border: 0.06rem solid #e8e9ee;
  border-radius: 0.31rem;
  display: flex;
  flex-direction: column;
  padding: 1.69rem 1.5rem 0 1.5rem;
  margin-bottom: 1rem;
  .price-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2.5rem;
    h5 {
      font-size: 0.88rem;
      font-weight: 400;
      color: #2f303b;
      margin-top: 2.88rem;
      text-align: center;
    }
  }
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2f303b;
  }
  li {
    font-size: 1rem;
    font-weight: 400;
    color: #2f303b;
    line-height: 2.25rem;
    margin-bottom: 2.19rem;
    &::marker {
      color: #b7dcef;
    }
  }
  .info {
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: 700;
    color: #2f303b;
    display: flex;
    margin-left: 0.88rem;
    .span {
      font-weight: 400;
      width: 30%;
    }
  }
`

export const NftButtom = styled.div`
  height: 14.38rem;
  background: #2f303b;
  border: 0.06rem solid #74778f;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    border: 0.06rem solid #74778f;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    padding: 1.31rem 0 0.63rem;
    span {
      font-size: 2.25rem;
      font-weight: bold;
      color: #ffffff;
      line-height: 3.13rem;
    }
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    .content {
      width: 89vw;
    }
  `}
`
