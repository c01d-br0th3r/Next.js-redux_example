import React, { Fragment } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { createGlobalStyle } from "styled-components";
import { wrapper } from "../store";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
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
        <title>Hello, Next!</title>
      </Head>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/list">
            <a>List</a>
          </Link>
        </li>
        <li>
          <Link href="/counter">
            <a>Counter</a>
          </Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default wrapper.withRedux(MyApp);
