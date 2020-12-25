import React, { Fragment } from "react";

import Input from "../../components/Input";
import Label from "../../components/Label";
import Layout from "../../components/Layout";
import Section from "../../components/Section";

const Search = () => {
  return (
    <Fragment>
      <Section backgroundColor="#a2a2a2" padding="18px 12px">
        <Input type="text" placeholder="텍스트를 입력해주세요." />
      </Section>
      <Layout>
        <Label>Text</Label>
      </Layout>
    </Fragment>
  );
};

export default Search;
