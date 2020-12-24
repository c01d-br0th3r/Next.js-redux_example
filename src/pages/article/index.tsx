import React from "react";
import axios from "axios";
import Link from "next/link";
import { InferGetStaticPropsType } from "next";

const List = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { results } = props;
  return (
    <div>
      {results.map((r: any) => (
        <Link href="/article/[id]" as={`/article/${r.id}`} key={r.id}>
          <div>{r.title}</div>
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const {
    data: { results },
  } = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=e6e0dd53c79220875187320b4265f3d6&language=ko-KR&page=1"
  );
  console.log(results);
  return { props: { results } };
}

export default List;
