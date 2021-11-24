import { ThemeProvider } from 'theme-ui'

const theme = {
  colors: {
    background: 'tomato',
    text: 'black',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
