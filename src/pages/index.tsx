import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Home: NextPage<{}> = () => {
  return <Title>Home</Title>;
};

export default Home;
