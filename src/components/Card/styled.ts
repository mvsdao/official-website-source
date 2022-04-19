import styled from 'styled-components'

export const CardWrapper = styled.div`
  width: calc(100% - 1.31rem);
  min-height: 14rem;
  background: #ffffff;
  border: 0.06rem solid #e8e9ee;
  border-radius: 0.31rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  cursor: pointer;
  .cardss {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-image {
      width: 95%;
      height: 15rem;
    }
  }
  .card-img {
    width: 100%;
    height: 15rem;
    border-radius: 0.31rem;
    margin-top: 0.5rem;
    object-fit: cover;
  }
  .ant-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    box-shadow: 0rem 0rem 0.63rem 0rem rgba(67, 68, 82, 0.28);
  }
  .divss {
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin-top: 1.19rem;
    margin-bottom: 1rem;
    .b {
      font-size: 0.75rem;
      color: #2f303b;
    }
    h5 {
      width: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.75rem;
      font-weight: 500;
      color: #2f303b;
      :nth-child(2) {
        text-align: end;
      }
    }
    h4 {
      margin-top: 0;
      font-size: 0.88rem;
      font-weight: 600;
      color: #2f303b;
      display: flex;
      align-items: center;
      .icosns {
        margin-right: 0.56rem;
        width: 0.69rem;
        height: auto;
      }
    }
  }
  .dirce {
    margin-top: 0;
    border-bottom: 1px solid rgba(232, 233, 238, 0.4);
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    .divss {
      flex-wrap: wrap;
      .b {
        font-size: 1.25rem;
      }
      h5, h4 {
        width: 100%;
        font-size: 1.25rem;
        text-align: start !important;
      }
      .buy-now-btn {
        width: 90%;
        margin-left: 5%;
        margin-top: 1.25rem;
        font-size: 1.5rem;
      }
    }
    .divss.ssss-h5 {
      display: flex;
      flex-direction: column-reverse;
    }
  `}
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

export const SpanStatus3 = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #2f303b;
  line-height: 1.88rem;
  margin-bottom: 0.63rem;
  margin-top: 0.88rem;
  width: calc(100% - 1.88rem);
  position: relative;
  .three-span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .eth-span {
    position: relative;
    font-weight: 400;
    float: right;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    ${({ theme }) => theme.mediaWidth.screenLg`
      float: none;
    `}
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    font-size: 1.25rem;
  `}
`

export const MyNftContent = styled.div`
  margin-bottom: 1.38rem;
  width: 100%;
  .ant-col {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-btn[disabled],
  .ant-btn[disabled]:hover,
  .ant-btn[disabled]:focus,
  .ant-btn[disabled]:active {
    border-color: #c0c3da;
    color: #c0c3da;
    background: transparent;
  }
`

export const CardModalWrapper = styled.div`
  min-height: 14rem;
  background: #ffffff;
  border: 0.06rem solid #e8e9ee;
  box-shadow: 0rem 0rem 0.63rem 0rem rgba(67, 68, 82, 0.28);
  border-radius: 0.31rem;
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

export const InputModal = styled.input`
  width: 100%;
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
`

export const InputModalUnit = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.themeColor};
  position: absolute;
  top: 4.5rem;
  right: 3.13rem;
  ${({ theme }) => theme.mediaWidth.screenLg`
    top: 5.5rem;
    right: 3.53rem;
  `}
`

// export const MyNftTitleToken = styled.div`
//   min-width: 5.63rem;
//   height: 1.75rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 0.63rem;
//   background: rgba(47, 48, 59, 0.2);
//   font-size: 0.75rem;
//   font-weight: 400;
//   position: absolute;
//   right: 7%;
//   top: 0.88rem;
//   color: ${({ theme }) => theme.themeColor};
//   span {
//     color: #fff;
//   }
//   ${({ theme }) => theme.mediaWidth.screenMd`
//     font-size: 1.25rem;
//   `}
// `
