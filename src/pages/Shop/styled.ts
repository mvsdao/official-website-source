import styled from 'styled-components'

export const ShopWrapper = styled.div`
  margin-top: 5rem;
  .content-shop {
    margin: 3.13rem 14.25rem;
    padding: 1.25rem 2rem 0 2rem;
  }
  .details-shop {
    background: #fbfbfd;
    .details-shop-left {
      display: flex;
      align-items: center;
      padding-top: 1.25rem;
      flex-direction: column;
      .ant-image {
        width: 100%;
        border-radius: 0.31rem;
        height: auto;
        box-shadow: 0.13rem 0.13rem 0.63rem 0rem rgba(18, 18, 27, 0.08);
      }
    }
    .details-shop-right {
      display: flex;
      flex-direction: column;
      padding-top: 1.25rem;
      h2 {
        font-size: 1.88rem;
        margin: 1.69rem 0;
        font-weight: 700;
      }
      h4 {
        font-size: 1rem;
        font-weight: 400;
        color: #2f303b;
        margin-bottom: 1.88rem;
      }
    }
  }
  ${({ theme }) => theme.mediaWidth.screenXl`
    .content-shop {
      margin: 3.13rem 8rem;
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenMd`
    .content-shop {
      margin: 3.13rem 1.75rem;
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenSm`
    .content-shop {
      margin: 3.13rem 1.75rem;
      padding: 1.25rem 1rem 0 1rem;
    }
  `}
`

export const ShopTitle = styled.div`
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

export const PriceDiv = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.themeColor};
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-image {
    margin-right: 1.25rem;
  }
  ${({ theme }) => theme.mediaWidth.screenXl`
    font-size: 2.58rem;
  `}
  ${({ theme }) => theme.mediaWidth.screenMd`
    font-size: 2.31rem;
  `}
  ${({ theme }) => theme.mediaWidth.screenSm`
    font-size: 1.88rem;
  `}
`

export const ModalTitle = styled.div`
  font-size: 2.25rem;
  font-weight: bold;
  color: #2f303b;
`

export const CardModalWrapper = styled.div`
  width: 21rem;
  background: #ffffff;
  border: 0.06rem solid #e8e9ee;
  box-shadow: 0rem 0rem 0.63rem 0rem rgba(67, 68, 82, 0.28);
  border-radius: 0.31rem;
  margin-bottom: 3.06rem;
  .card-modal-img {
    width: 95%;
    height: auto;
    border-radius: 0.31rem;
    margin-top: 0.5rem;
  }
  .ant-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Span = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #2f303b;
  line-height: 1.88rem;
  margin-left: 2rem;
  width: calc(100% - 1.88rem);
  margin-bottom: 0.63rem;
  margin-top: 0.88rem;
  ${({ theme }) => theme.mediaWidth.screenMd`
    font-size: 1.25rem;
  `}
`
