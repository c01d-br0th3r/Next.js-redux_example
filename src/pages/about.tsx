import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
`;

const About: NextPage<{}> = () => {
  return <Title>About</Title>;
};

export default About;
