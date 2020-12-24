import React from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";

const Test1 = styled.div`
  font-size: 32px;
  font-weight: 600;
`;

const Test2 = styled.div`
  background-color: yellow;
  padding: 20px;
`;

const Test3 = styled.div`
  font-size: 48px;
  color: blue;
`;

const Test4 = styled.div`
  font-size: 20px;
  letter-spacing: 12px;
`;

const Chance = () => {
  return (
    <Layout>
      <Test1>왜깜빡이냐고</Test1>
      <Test2>진짜</Test2>
      <Test3>적당히하라고</Test3>
      <Test4>해달라는거다해줬잖아</Test4>
    </Layout>
  );
};

export default Chance;
