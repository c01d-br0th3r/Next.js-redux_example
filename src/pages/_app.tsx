import React, { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";

const GlobalStyles = createGlobalStyle`
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
    }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <GlobalStyles />
      <Head>
        <title>Hello, OKKOT</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default MyApp;
