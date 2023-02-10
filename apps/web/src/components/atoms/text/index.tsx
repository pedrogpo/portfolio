import styled from 'styled-components'
import { ColorThemeType, TextFontSize, WeightFont } from '~/core/constants/theme'

interface TextProps {
  size?: TextFontSize
  color?: ColorThemeType
  weight?: WeightFont
}

export const Text = styled.p<TextProps>`
  ${({ theme, size, color, weight }) => `
    color: ${color ? theme.colors[color] : 'inherit'};
    font-size: ${size ? theme.typography.text[size] : 'inherit'};
    font-weight: ${weight ? theme.typography.weight[weight] : 'inherit'};
  `}
  margin-bottom: 0;
  transition: 0.3s ease all;
`
