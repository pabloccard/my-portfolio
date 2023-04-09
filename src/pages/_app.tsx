import { GlobalStyles } from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import type { AppProps } from 'next/app'

// const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin-ext'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </div>
  )
}
