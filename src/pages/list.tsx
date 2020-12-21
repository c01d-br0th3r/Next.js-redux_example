import React from "react";
import axios from "axios";
import Link from "next/link";
import { NextPage } from "next";

const List: NextPage<{}> = (props: any) => {
  const { results } = props;
  return (
    <div>
      {results.map((r: any) => (
        <Link href="/article/[id]" as={`/article/${r.id}`}>
          <div>{r.title}</div>
        </Link>
      ))}
    </div>
  );
};

List.getInitialProps = async () => {
  const {
    data: { results },
  } = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=e6e0dd53c79220875187320b4265f3d6&language=ko-KR&page=1"
  );
  return { results };
};

export default List;
