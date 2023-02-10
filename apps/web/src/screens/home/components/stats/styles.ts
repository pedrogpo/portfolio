import styled from 'styled-components'

export const Stats = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_700};
  padding: 4.5rem 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Body = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Stat = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  border-right: 1px solid ${({ theme }) => theme.colors.gray_500};
  padding-right: 2rem;

  &:last-child {
    border-right: none;
    padding-right: 0;
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
    border-right: none;
    padding-right: 0;
  }
`
