import styled from 'styled-components'

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.primary_300};
  border-radius: 7px;
  color: ${({ theme }) => theme.colors.primary_500};

  svg {
    fill: ${({ theme }) => theme.colors.primary_500};
  }
`
