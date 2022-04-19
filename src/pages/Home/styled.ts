import styled from 'styled-components'
import ARROW from '@/assets/arrow.png'
import ARROW_ACTIVE from '@/assets/arrow_active.png'
import NUMBER_01 from '@/assets/01.png'
import NUMBER_02 from '@/assets/02.png'
import ABOUT_ICON from '@/assets/about_icon.png'
import INTRODUCE_XT1 from '@/assets/introduce_xt1.png'

export const HomeWrapper = styled.div`
  .h5-anim {
    ${({ theme }) => theme.mediaWidth.screenMd`
      width: 80%;
    `}
    ${({ theme }) => theme.mediaWidth.screenSm`
      width: 100%;
    `}
  }
  .IntroduceA {
    width: 11.25rem;
    height: 3.63rem;
    border: 0.06rem solid #404cb9;
    border-radius: 1.81rem;
    text-align: center;
    font-size: 1.13rem;
    font-weight: bold;
    color: ${(props) => props.theme.themeColor};
    :hover {
      color: ${(props) => props.theme.themeColor};
    }
    ${({ theme }) => theme.mediaWidth.screenMd`
    font-size: 1.5rem;
    `}
  }
`

export const BannerContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 20%;
  width: 55vw;
  height: auto;
  .HomeBannerTitle {
    position: absolute;
    bottom: 12.81rem;
    left: 0;
    min-width: 22.44rem;
    height: 6.69rem;
    border: 0.06rem solid #74778f;
    border-radius: 0.63rem;
    text-align: center;
    background: transparent;
    font-size: 2.25rem;
    font-weight: 400;
    color: #2f303b;
    cursor: pointer;
    z-index: 9;
    ${({ theme }) => theme.mediaWidth.screenMd`
      min-width: auto;
      border: 0.06rem solid #74778F;
      border-radius: 0.63rem;
      padding-right: 0.31rem;
      padding-left: 0.31rem;
    `}
  }
  .xt1 {
    position: absolute;
    top: -6.29rem;
    left: 11.22rem;
    width: 35.75rem;
    height: auto;
  }
  .xt2 {
    width: 26.38rem;
    height: auto;
    float: right;
    position: relative;
    z-index: 1;
  }
  .figure {
    position: absolute;
    right: 6.63rem;
    bottom: -1.06rem;
    width: 25.75rem;
    height: auto;
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    bottom: 0;
    left: 0.31rem;
    width: calc(100% - 0.31rem - 2.25rem);
    .xt1 {
      left: 2.75rem;
      top: -4.75rem;
      width: auto;
      height: 4.75rem;
    }
    .xt2 {
    }
    .figure {
      right: 1.25rem;
      width: 21.94rem;
      height: 20.88rem;
      bottom: 1.63rem;
    }
  `}
`

export const Banner = styled.div`
  position: relative;
  border-bottom: 0.06rem solid #74778f;
`

export const IntroduceDiv = styled.div`
  display: flex;
  align-items: center;
  min-height: 67.94rem;
  flex-direction: column;
  position: relative;
  ${({ theme }) => theme.mediaWidth.screenMd`
  `}
`

export const IntroduceXt = styled.div`
  width: 29.18rem;
  height: 100%;
  position: absolute;
  top: 0;
  right: 50%;
  background: url(${INTRODUCE_XT1}) no-repeat;
  background-size: 100% 100%;
  ::after {
    content: '';
    position: absolute;
    top: 12.5rem;
    left: -0.4rem;
    width: 1rem;
    height: 1rem;
    background: #fff;
    border-radius: 50%;
    border: 0.06rem solid #74778f;
  }
`

export const IntroduceTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #2f303b;
  margin-top: 10.25rem;
  margin-bottom: 3rem;
  span {
    color: #fac432;
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    margin-bottom: 2.69rem;
    margin-top: 9.94rem;
    text-align: center;
  `}
`

export const IntroduceSpan = styled.div`
  font-size: 1.13rem;
  font-weight: 400;
  color: #2f303b;
  margin-bottom: 4.19rem;
  ${({ theme }) => theme.mediaWidth.screenMd`
    width: 35.13rem;
    margin-bottom: 2.06rem;
    text-align: center;
    font-size: 1.5rem;
  `}
`

export const IntroduceSrc = styled.div`
  width: 0.63rem;
  height: 1.25rem;
  background: url(${ARROW}) no-repeat;
  background-size: 100% 100%;
  margin: 4.06rem 0 3.13rem 0;
  cursor: pointer;
  :hover {
    background: url(${ARROW_ACTIVE}) no-repeat;
    background-size: 100% 100%;
  }
`

export const IntroduceList = styled.div`
  display: flex;
  margin-bottom: 19rem;
  ${({ theme }) => theme.mediaWidth.screenMd`
    justify-content: space-between;
    margin: 0 1.38rem;
  `}
  ${({ theme }) => theme.mediaWidth.screenSm`
    flex-wrap: wrap;
    justify-content: center;
  `}
`

export const ListInfo = styled.div`
  width: 21rem;
  height: 26.13rem;
  background: #ffffff;
  border: 0.06rem solid #74778f;
  box-shadow: 0rem 0rem 0.63rem 0rem rgba(67, 68, 82, 0.28);
  border-radius: 0.31rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  :nth-child(1) {
    margin-right: 2.19rem;
  }
  img {
    width: 20.13rem;
    height: 20.13rem;
    margin: 0.5rem 0;
  }
  span {
    position: absolute;
    bottom: 1.69rem;
    left: 2rem;
    font-size: 1.13rem;
    font-weight: bold;
    color: #2f303b;
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    :nth-child(1) { margin-right: 0; }
    span {font-size: 1.5rem;}
  `}
  ${({ theme }) => theme.mediaWidth.screenSm`
    :nth-child(1) { margin-bottom: 1.5rem; }
  `}
`

export const ListInfoNumber = styled.div`
  width: 4.38rem;
  height: 2.94rem;
  background: url(${NUMBER_01}) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: 1.25rem;
  right: -0.63rem;
`

export const ListInfoNumberTwo = styled.div`
  width: 4.38rem;
  height: 2.94rem;
  background: url(${NUMBER_02}) no-repeat;
  background-size: 100% 100%;
  position: absolute;
  bottom: 1.25rem;
  right: -0.63rem;
`

export const AboutDiv = styled.div<{ active: boolean }>`
  position: relative;
  min-height: 25rem;
  margin-bottom: ${({ active }) => (active ? '6.94rem' : '0')};
  padding-bottom: ${({ active }) => (active ? '0' : '2.5rem')};
  ${({ active }) =>
    active &&
    `
    ::after {
      content: '';
      position: absolute;
      bottom: -6.94rem;
      width: 0.06rem;
      height: 6.94rem;
      left: calc(50% - 0.03rem);
      background: #a7a8b1;
    }
  `}
  ${({ theme }) => theme.mediaWidth.screenMd`
  margin-bottom: 4.63rem;
  margin-top: 2.5rem;
  ::after {
    content: none;
  }
  `}
`

export const AboutDivContent = styled.div`
  width: 62.5rem;
  height: 27.94rem;
  background: #ffffff;
  border: 0.06rem solid #74778f;
  box-shadow: 0rem 0.44rem 1.81rem 0rem rgba(109, 118, 116, 0.18);
  border-radius: 0.63rem;
  margin-left: calc(50% - 31.25rem);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 111;
  .ant-row {
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  ul {
    width: calc(100% - 2.81rem);
    li {
      font-size: 1rem;
      font-weight: 500;
      color: #2f303b;
      margin-bottom: 2.88rem;
    }
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    width: calc(100% - 3.13rem);
    margin-left: 1.56rem;
    height: auto;
    .ant-image {
      margin-bottom: 2.5rem;
    }
    ul {
      li {
        line-height: 1.88rem;
      }
    }
  `}
`

export const AboutTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: #2f303b;
  margin-bottom: 3.94rem;
  position: relative;
  text-indent: 3.88rem;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 1rem;
    width: 2.88rem;
    height: 2.88rem;
    background: url(${ABOUT_ICON}) no-repeat;
    background-size: 100% 100%;
  }
  ${({ theme }) => theme.mediaWidth.screenMd`
    margin-top: 3rem;
    margin-bottom: 0.63rem;
  `}
`
