import * as S from './styles'

import { ButtonHTMLAttributes } from 'react'
import { ColorThemeType, TextFontSize, WeightFont } from '~/core/constants/theme'

interface ButtonAppProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorThemeType
  padding?: string
  size?: TextFontSize
  weight?: WeightFont
  fill?: 'contained' | 'outlined' | 'white'
  hug?: boolean
  boxShadow?: boolean
}

export default function Button({
  color = 'primary_500',
  padding = '.75rem 1.5rem',
  fill = 'contained',
  size = 'm',
  weight = 'bold',
  hug = true,
  boxShadow = false,
  children,
  ...props
}: React.PropsWithChildren<ButtonAppProps>) {
  return (
    <S.ButtonContainer
      color={color}
      padding={padding}
      size={size}
      weight={weight}
      fill={fill}
      hug={hug}
      boxShadow={boxShadow}
      {...props}
    >
      {children}
    </S.ButtonContainer>
  )
}
