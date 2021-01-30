import { useRouter } from "next/router";
import React, { Fragment } from "react";
import axios from "axios";
import Box from "../../components/Box";
import useSWR from "swr";
import { api } from "apis";

const Article = (props: any) => {
  const router = useRouter();
  const { data, error } = useSWR(router.query.id!, api.getMovieById);
  console.log(data, error);
  if (!data && !error) {
    return (
      <Fragment>
        <Box width="300px" height="50px" />
        <Box width="600px" height="30px" />
        <Box width="600px" height="30px" />
        <Box width="600px" height="30px" />
        <Box width="600px" height="30px" />
      </Fragment>
    );
  }

  return <div>{data?.data.title}</div>;
};

// export async function getStaticPaths() {
//   const paths = [{ params: { id: "123" } }, { params: { id: "345" } }];
//   const fallback = true;
//   return {
//     paths,
//     fallback,
//   };
// }

// export async function getStaticProps(ctx: any) {
//   const id = ctx.params.id;
//   const { data } = await axios.get(
//     `https://api.themoviedb.org/3/movie/${id}}?api_key=e6e0dd53c79220875187320b4265f3d6&language=ko-KR`
//   );
//   return {
//     props: { result: data },
//   };
// }

export default Article;
