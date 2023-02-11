import 'bootstrap/dist/css/bootstrap.min.css'
import '~/styles/fonts.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../core/constants/theme'

import GlobalStyle from '~/styles/global'

import { appWithTranslation } from 'next-i18next'

function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(Portfolio)
