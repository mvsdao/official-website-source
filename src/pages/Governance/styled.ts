import styled from 'styled-components'

export const GovernanceWrapper = styled.div`
  height: 71.4vh;
  padding-top: 5rem;
`

export const GovernanceTitle = styled.div`
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

export const GovernanceContent = styled.div`
  width: 100%;
  height: calc(100% - 6.75rem);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .span {
    position: absolute;
    top: calc(50% - 9.25rem);
    left: calc(50% - 3.25rem);
    font-size: 1.25rem;
    font-weight: 500;
    color: #2f303b;
    line-height: 2.63rem;
    span {
      color: #fac432;
    }
  }
`
