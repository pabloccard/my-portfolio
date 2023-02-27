import { GlobalStyles } from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
