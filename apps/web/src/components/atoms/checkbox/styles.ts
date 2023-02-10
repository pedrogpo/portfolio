import styled, { css } from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckBoxContainer = styled.div.attrs({ className: 'checkbox' })`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  label {
    ${({ theme }) => css`
      font-size: ${theme.typography.text.s};
      font-weight: ${theme.typography.weight.medium};
      color: ${theme.colors.gray_500};
    `};
    a {
      font-weight: bold;
    }
  }
  button {
    width: 25px !important;
    height: 25px !important;
    background: ${({ theme }) => theme.colors.background_700};
    border: none !important;
  }
`

export const CheckBoxRoot = styled(Checkbox.Root)`
  background: transparent;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.gray_100};
  }

  &[data-state='checked'] {
    svg {
      fill: ${({ theme }) => theme.colors.primary_500};
    }
  }
`

export const CheckBoxIndicator = styled(Checkbox.Indicator)`
  color: ${({ theme }) => theme.colors.gray_100};
  svg {
    width: 1.25rem;
    height: 1.25rem;
    position: relative;
    top: -1px;
  }
`
