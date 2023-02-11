import styled from 'styled-components'

export const Footer = styled.footer`
  background: rgba(18, 19, 23, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(50px);
  padding: 4.35rem 0;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`

export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const ContentRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: ${({ theme }) => theme.colors.gray_100};
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
