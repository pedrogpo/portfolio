import styled from 'styled-components'

export const Portfolio = styled.section`
  width: 100%;
  margin: 11.75rem 0;
  position: relative;
`

export const PortfolioHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`

export const PortfolioBottom = styled.div`
  margin-top: 3rem;
  text-align: center;
`

export const PortfolioContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background_700_08};
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
`

export const PortfolioContainerContent = styled.div``

export const PortfolioContainerHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
`

export const PortfolioContainerBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;
`

export const PortfolioImage = styled.div`
  background-color: ${({ theme }) => theme.colors.background_900};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 500px;
    border-radius: 15px;
  }
  filter: drop-shadow(0px 0px 50px rgba(0, 0, 0, 0.15));
  border-radius: 15px;
`

export const PortfolioUnderlayLeft = styled.div`
  position: absolute;
  left: 0;
  top: -87px;
`

export const PortfolioUnderlayRight = styled.div`
  position: absolute;
  right: 0;
  top: -87px;
  transform: scaleX(-1);
`
