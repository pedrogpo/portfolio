import styled from 'styled-components'

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.background_500};
  border-radius: 10px;
  padding: 2rem;
  gap: 1.5rem;
  padding-bottom: 2.5rem;
`

export const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

export const UserIcon = styled.div`
  background-color: ${({ theme }) => theme.colors.background_800};
  border-radius: 100px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.375rem;
`

export const Stars = styled.div`
  display: flex;
  gap: 0.25rem;
`
