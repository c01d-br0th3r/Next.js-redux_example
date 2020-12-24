import { useRouter } from "next/router";
import React from "react";
import axios from "axios";

const Article = (props: any) => {
  const router = useRouter();
  const result = props.result;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>{result.title}</div>
      <div>{result.overview}</div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = [{ params: { id: "123" } }, { params: { id: "345" } }];
  const fallback = true;
  return {
    paths,
    fallback,
  };
}

export async function getStaticProps(ctx: any) {
  const id = ctx.params.id;
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}}?api_key=e6e0dd53c79220875187320b4265f3d6&language=ko-KR`
  );
  return {
    props: { result: data },
  };
}

export default Article;
