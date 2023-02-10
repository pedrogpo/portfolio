import 'bootstrap/dist/css/bootstrap.min.css'
import '~/styles/fonts.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../core/constants/theme'

import GlobalStyle from '~/styles/global'

export default function Ploow({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
