import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto'; //I think?
  }

  body {
    margin: 0;
    padding: 0;
  }
`

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`

const theme = {
  colors: {
    primary: '#000',
    grayBorder: '#d9d9d9',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Title>PUNK API</Title>
        <hr />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
