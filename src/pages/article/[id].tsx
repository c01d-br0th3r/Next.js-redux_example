import { NextPage, NextPageContext } from "next";
import React from "react";
import axios from "axios";

const Article: NextPage<{}> = (props: any) => {
  const result = props.result;
  return (
    <div>
      <div>{result.title}</div>
      <div>{result.overview}</div>
    </div>
  );
};

Article.getInitialProps = async (ctx: NextPageContext) => {
  const id = ctx.query.id;
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}}?api_key=e6e0dd53c79220875187320b4265f3d6&language=ko-KR`
  );
  return {
    result: data,
  };
};

export default Article;
