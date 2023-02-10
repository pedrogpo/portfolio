export const defaultTheme = {
  colors: {
    background_900: 'rgba(14, 15, 18, 1)',
    background_800: 'rgba(18, 19, 23, 1)',
    background_800_08: 'rgba(18, 19, 23, 0.80)',
    background_700: 'rgba(20, 21, 26, 1)',
    background_700_08: 'rgba(20, 21, 26, 0.50)',
    background_600: 'rgba(21, 22, 27, 1)',
    background_500: 'rgba(26, 27, 33, 1)',
    red_500: 'rgba(245, 20, 70, 1)',
    primary_500: 'rgba(73, 124, 255, 1)',
    primary_600: 'rgba(99, 143, 255, 1)',
    primary_800: 'rgba(21, 28, 46, 1)',
    primary_700: 'rgba(40, 53, 88, 1)',
    primary_400: 'rgba(64, 109, 224, 1)',
    gray_100: 'rgba(237, 237, 237, 1)',
    gray_200: 'rgba(204, 204, 204, 1)',
    gray_300: 'rgba(176, 179, 181, 1)',
    gray_400: 'rgba(147, 154, 159, 1)',
    gray_500: 'rgba(117, 128, 138, 1)',
    gray_600: 'rgba(92, 103, 112, 1)',
    gray_700: 'rgba(71, 77, 82, 1)',
    gray_800: 'rgba(47, 51, 55, 1)',
    gray_900: 'rgba(16, 18, 20, 1)',
  } as const,
  typography: {
    title: {
      xxl: '4.5rem',
      xl: '3.5rem',
      l: '3rem',
      m: '2.5rem',
      s: '2rem',
      xs: '1.5rem',
    } as const,
    text: {
      xl: '1.25rem',
      l: '1.12rem',
      m: '1rem',
      s: '0.88rem',
      xs: '0.75rem',
    } as const,
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    } as const,
  } as const,
}

export type ColorThemeType = keyof typeof defaultTheme.colors

export type TitleFontSize = keyof typeof defaultTheme.typography.title
export type TextFontSize = keyof typeof defaultTheme.typography.text
export type WeightFont = keyof typeof defaultTheme.typography.weight
