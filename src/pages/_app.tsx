import React, { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import StackNavigation from "../components/StackNavigation";

const globalStyle = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Noto Sans KR', sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
#__next {
  height: 100%;
}`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Head>
        <title>Hello, OKKOT</title>
        <style>{globalStyle}</style>
      </Head>
      <Header />
      <Component {...pageProps} />
      <StackNavigation />
    </Fragment>
  );
};

export default MyApp;
