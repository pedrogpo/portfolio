import styled from 'styled-components'

export const DividerHorizontal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .divider {
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray_800};
    width: 100%;
  }

  .content {
    padding: 0 1.5rem 0 1.5rem;
    color: ${({ theme }) => theme.colors.gray_800};
    font-weight: ${({ theme }) => theme.typography.weight.semibold};
    font-size: ${({ theme }) => theme.typography.text.l};
    text-transform: uppercase;
  }
  
  opacity: .5;
`
