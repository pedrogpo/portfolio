import styled, { css } from 'styled-components'
import { ColorThemeType, TextFontSize, WeightFont } from '~/core/constants/theme'

interface ButtonProps {
  color: ColorThemeType
  padding: string
  size: TextFontSize
  weight: WeightFont
  fill: 'contained' | 'outlined' | 'white'
  theme: 'primary' | 'secondary'
  hug: boolean
  boxShadow: boolean
}

const fillVariants = (
  fill: 'contained' | 'outlined' | 'white',
  color: ColorThemeType
) => {
  return {
    contained: css`
      background-color: ${({ theme }) => theme.colors[color]};
      color: ${({ theme }) => theme.colors.gray_100};
      &:hover {
        opacity: 0.75;
      }
    `,
    outlined: css`
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.colors[color]};
      color: ${({ theme }) => theme.colors.gray_100};
    `,
    white: css`
      background-color: ${({ theme }) => theme.colors.gray_100};
      color: ${({ theme }) => theme.colors.gray_900};
      font-weight: ${({ theme }) => theme.typography.weight.bold};
    `,
  }[fill]
}

export const ButtonContainer = styled.button<ButtonProps>`
  border: none;
  transition: 0.3s ease all;

  ${({ hug }) =>
    css`
      width: ${hug ? 'fit-content' : '100%'};
    `}

  background: transparent;

  padding: ${({ padding }) => padding};

  ${({ theme, size, color, weight }) => `
    font-size: ${size ? theme.typography.text[size] : 'inherit'};
    font-weight: ${weight ? theme.typography.weight[weight] : 'inherit'};
  `}

  ${({ fill, color }) => fillVariants(fill, color)}

  ${({ boxShadow }) =>
    boxShadow &&
    css`
      box-shadow: 0px 0px 30px rgba(130, 87, 229, 0.2);
    `}

  border-radius: 7px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      &:hover {
        opacity: 0.5;
      }
      cursor: default;
    `}
`
