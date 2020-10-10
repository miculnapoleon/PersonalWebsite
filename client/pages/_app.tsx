import React from 'react';
import App, { AppContext } from 'next/app';
// import { ThemeProvider, CssBaseline } from '@material-ui/core';

class Root extends App<any> {
  componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentNode?.removeChild(jssStyles);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        {/* <ThemeProvider theme={theme}> */}
        {/* <CssBaseline /> */}
        <Component {...pageProps} />
        {/* </ThemeProvider> */}
      </>
    );
  }
}

Root.getInitialProps = async ({ Component, ctx }: AppContext) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps };
};

export default Root;
