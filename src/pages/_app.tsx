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
