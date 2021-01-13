import React, { Fragment, useState } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import StackNavigation from "../components/StackNavigation";
import SearchBox from "components/SearchBox";

const globalStyle = `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Spoqa Han Sans Neo';
}
a {
  color: inherit;
  text-decoration: none;
}
#__next {
  height: 100%;
}
@font-face {
  font-family: Spoqa Han Sans Neo;
  font-weight: 700;
  src: url('/fonts/Spoqa-Han-Sans-Neo-Bold.woff2') format('woff2');
}
@font-face {
  font-family: Spoqa Han Sans Neo;
  font-weight: 500;
  src: url('/fonts/Spoqa-Han-Sans-Neo-Medium.woff2') format('woff2');;
}
@font-face {
  font-family: Spoqa Han Sans Neo;
  font-weight: 400;
  src: url('/fonts/Spoqa-Han-Sans-Neo-Regular.woff2') format('woff2');;
}
@font-face {
  font-family: Spoqa Han Sans Neo;
  font-weight: 300;
  src: url('/fonts/Spoqa-Han-Sans-Neo-Thin.woff2') format('woff2');;
}
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [openSearchBox, setOpenSearchBox] = useState<boolean>(false);
  const [term, setTerm] = useState<string>("");
  const handleSearchBoxOpen = () => {
    const body = document.querySelector("body") as HTMLElement;
    if (openSearchBox) {
      body.style.overflow = "scroll";
    } else {
      body.style.overflow = "hidden";
    }
    setOpenSearchBox((prev) => !prev);
  };
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTerm(target.value);
  };
  return (
    <Fragment>
      <Head>
        <title>Hello, OKKOT</title>
        <style>{globalStyle}</style>
      </Head>
      <Header />
      <Component {...pageProps} />
      <StackNavigation handleSearchOpen={handleSearchBoxOpen} />
      {openSearchBox ? (
        <SearchBox
          handleSearchBox={handleSearchBoxOpen}
          handleChange={handleChange}
          term={term}
        />
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};

export default MyApp;
