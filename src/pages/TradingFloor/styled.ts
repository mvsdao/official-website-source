import styled from 'styled-components'

export const TradingFloorWrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  .content-nft {
    margin: 3.13rem 0;
  }
  .content-shop {
    margin: 3.13rem 14.25rem;
    padding: 1.25rem 2rem 0 2rem;
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
  .left {
    position: relative;
    z-index: 2;
    box-shadow: -0.19rem 0rem 2.88rem 0rem rgba(44, 44, 50, 0.2);
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
    .content-nft {
      margin: 3.13rem 0;
    }
    .content-shop {
      margin: 3.13rem 8rem;
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenMd`
    .content-nft {
      margin: 3.13rem  0;
    }
    .content-shop {
      margin: 3.13rem 1.75rem;
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenSm`
    .content-nft {
      margin: 3.13rem  0;
    }
    .content-shop {
      margin: 3.13rem 1.75rem;
      padding: 1.25rem 1rem 0 1rem;
    }
  `}
`

export const TradingFloorLeft = styled.div`
  min-height: 80vh;
  background: #ffffff;
  border-right: 0.06rem solid #e8e9ee;
  position: relative;
  .left-icon {
    position: absolute;
    top: 2.38rem;
    font-size: 1.48rem;
    color: rgba(47, 48, 59, 0.6);
    left: calc(50% - 0.94rem);
    cursor: pointer;
  }
  .left-active-icon {
    font-size: 1.48rem;
    color: rgba(47, 48, 59, 0.6);
    cursor: pointer;
  }
`

export const TradingFloorContent = styled.div<{ active: boolean }>`
  padding: ${({ active }) => (active ? '0 9.06rem 0 1.56rem' : '0 11.81rem')};
  ${({ theme }) => theme.mediaWidth.screenMd`
    padding: 0 2.5rem;
  `}
`

export const TradingFloorTitle = styled.div<{ active: boolean }>`
  min-height: 6.75rem;
  border-bottom: 0.06rem solid #e8e9ee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ active }) => (active ? '0 9.06rem 0 1.56rem' : '0 11.81rem')};
  .css-1okebmr-indicatorSeparator {
    display: none;
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    padding: 0 2.5rem;
    flex-direction: column;
    align-items: start;
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
    line-height: 4.75rem;
    span {
      line-height: 4.75rem;
      font-size:  2.31rem;
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
  display: flex;
  justify-content: end;
  width: 60%;
  flex-wrap: wrap;
  ${({ theme }) => theme.mediaWidth.screenMd`
    justify-content: start;
    width: 100%;
  `}
`

export const RightContent = styled.div`
  padding-top: 2.56rem;
  .price-number {
    margin: 1.31rem 1.25rem 1.25rem 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-input-number {
      width: 100%;
      height: 4.25rem;
      background: #ffffff;
      border: 0.06rem solid #e8e9ee;
      border-radius: 0.31rem;
    }
    .ant-input-number-input {
      height: 4.25rem;
    }
  }
  .price-num-to {
    font-size: 1rem;
    font-weight: 500;
    color: #2f303b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nft-list {
    margin: 1.38rem 1.25rem;
    display: flex;
    flex-wrap: wrap;
    .nft-btn {
      width: calc(50% - 0.5rem);
      height: 4.25rem;
      background: #ffffff;
      border: 0.06rem solid #e8e9ee;
      border-radius: 0.31rem;
      margin-bottom: 0.88rem;
      font-size: 1rem;
      font-weight: 500;
      color: #2f303b;
      &:nth-child(2n-1) {
        margin-right: 1rem;
      }
      &:hover {
        background: #e7f6ff;
        border-color: #e7f6ff;
        color: ${(props) => props.theme.themeColor};
      }
    }
    .nft-btn.active {
      background: #e7f6ff;
      border-color: #e7f6ff;
      color: ${(props) => props.theme.themeColor};
    }
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    .price-num-to {
      font-size: 1.25rem;
    }
    .nft-list {
      .nft-btn {
        font-size: 1.25rem;
      }
    }
  `}
`

export const RightTitle = styled.div`
  height: 4rem;
  padding-left: 1.5rem;
  background: #fbfbfd;
  line-height: 4rem;
  font-size: 1rem;
  font-weight: bold;
  color: #2f303b;
  ${({ theme }) => theme.mediaWidth.screenMd`
    font-size: 1.25rem;
  `}
`

export const SelectionDiv = styled.div`
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 0.94rem;
    color: #2f303b;
  }
`

export const ThemeList = styled.div`
  width: 14rem;
  max-width: calc(100% - 1.38rem - 1.38rem);
  height: 2.38rem;
  background: #e7f6ff;
  border-radius: 1.19rem;
  font-size: 0.88rem;
  font-weight: 500;
  color: ${(props) => props.theme.themeColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.38rem 0 2rem 1.38rem;
  ${({ theme }) => theme.mediaWidth.screenMd`
    font-size: 1.25rem;
    width: 19rem;
    height: 3.38rem;
  `}
`

export const PriceDivCard = styled.div`
  width: calc(100% - 2.5rem);
  margin: 1.44rem 1.25rem 0 1.25rem;
  height: 4.25rem;
  background: #ffffff;
  border: 0.06rem solid #e8e9ee;
  border-radius: 0.31rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  color: #2f303b;
  position: relative;
  .ant-image {
    position: absolute;
    left: 0.63rem;
  }
  span {
    width: 70%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    font-size: 1.25rem;
  `}
`

export const customStyles = {
  placeholder: (provided: any) => ({
    ...provided,
    color: '#2F303B',
    fontWeight: 400,
    fontSize: '1rem',
    '@media (max-width: 768px)': {
      fontSize: '1.25rem',
    },
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    minWidth: '15.75rem',
    margin: '1.25rem 0',
    height: '4.25rem',
    textAlign: 'center',
    border: '0.9px solid #E8E9EE',
    borderRadius: '0.31rem',
    display: 'flex',
    background: '#fff',
    borderColor: '#fff',
    boxShadow: '1px solid #E8E9EE',
    '&:hover': {
      borderColor: '#E8E9EE',
    },
    '@media (max-width: 768px)': {
      minWidth: '20.75rem',
      height: '3.25rem',
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? '#2F303B' : '#1E1E1E',
    background: state.isSelected ? '#FAFAFA' : '#fff',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: state.isSelected ? 600 : 400,
    margin: 0,
    height: '3rem',
    ':active': {
      background: '#FAFAFA',
      backgroundColor: '#FAFAFA',
    },
    ':hover': {
      color: '#2F303B',
      backgroundColor: '#FAFAFA',
    },
    '@media (max-width: 768px)': {
      fontSize: '1.25rem',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    boxShadow: 'none',
    backgroundColor: '#fff',
  }),
  menuList: (provided: any) => ({
    ...provided,
    boxShadow: '0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%)',
  }),
  singleValue: (provided: any, state: any) => {
    const transition = 'opacity 300ms'
    return { ...provided, transition, color: '#2F303B' }
  },
}

export const SelectionNumDiv = styled.div`
  min-width: 13.75rem;
  height: 4.25rem;
  background: #e7f6ff;
  border: 0.06rem solid #cddfea;
  border-radius: 0.31rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  margin: 1.25rem 0;
  margin-right: 1.25rem;
  .icons {
    width: 0.69rem;
    height: auto;
    margin-left: 1.81rem;
    margin-right: 0.75rem;
  }
  .leftsss {
    margin-left: 1.81rem;
  }
  .right-icons {
    font-size: 1.13rem;
    color: #a3b7c3;
    margin-right: 1.25rem;
    cursor: pointer;
  }
  span {
    color: ${(props) => props.theme.themeColor};
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
   min-width: 10.75rem;
   height: 3.25rem;
   font-size: 1.25rem;
   margin: 1rem 0;
   margin-right: 1rem;
  `}
`

export const H5Bottom = styled.div`
  height: 6rem;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  .su-btn {
    background: ${({ theme }) => theme.themeColor};
    border-radius: 0.63rem;
    width: 50%;
    height: 39px;
    color: #fff;
    border-color: ${({ theme }) => theme.themeColor};
  }
`
