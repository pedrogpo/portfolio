import { InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { ColorThemeType } from '~/core/constants/theme'

const sizeVariants = (size: string) => {
  return {
    m: css`
      padding: 1rem 0;
      font-size: ${({ theme }) => theme.typography.text.s};
      font-weight: ${({ theme }) => theme.typography.weight.semibold};
    `,
    l: css`
      padding: 1.1rem 0;
      font-size: ${({ theme }) => theme.typography.text.m};
      font-weight: ${({ theme }) => theme.typography.weight.semibold};
    `,
  }[size]
}
interface InputIconProps {
  sizeOf: 'm' | 'l'
  iconPos: 'left' | 'right'
  iconSize?: number
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, InputIconProps {
  background: ColorThemeType
}

export const Input = styled.input<InputProps>`
  width: 100%;
  outline: none;
  border: 1px solid transparent;

  ${({ sizeOf }) => sizeVariants(sizeOf)}

  ${({ iconPos, sizeOf, iconSize }) =>
    iconSize &&
    iconPos === 'left' &&
    `padding-left: calc(2.15rem + ${
      iconSize ? `${iconSize}px` : sizeOf === 'm' ? '22px' : '24px'
    });`}

  ${({ theme, background }) => css`
    background: ${theme.colors[background]};
    border: 1px solid transparent;
    color: ${theme.colors.gray_100};
  `}

  &:disabled {
    cursor: text;
  }

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_700};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_700};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_400};
  }

  transition: 0.3s ease all;
`

interface InputBoxInterface {
  hasError: boolean
}

export const InputBox = styled.div<InputBoxInterface>`
  position: relative;
  width: 100%;

  ${({ hasError }) =>
    hasError &&
    css`
      margin-bottom: 1rem;
    `}
`

export const InputIcon = styled.span<InputIconProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  line-height: 0;
  z-index: 1;

  left: 20px;
  ${(props) => props.iconPos === 'right' && 'right: 20px; left: initial;'}

  svg {
    color: ${({ theme }) => theme.colors.gray_500};

    ${({ sizeOf, iconSize }) =>
      css`
        width: ${iconSize ? `${iconSize}px` : sizeOf === 'm' ? '22px' : '24px'};
        height: ${iconSize ? `${iconSize}px` : sizeOf === 'm' ? '22px' : '24px'};
      `}
  }
`

export const InputError = styled.div`
  position: absolute;
  margin-top: 0.5rem;

  color: ${({ theme }) => theme.colors.red_500};
  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`
