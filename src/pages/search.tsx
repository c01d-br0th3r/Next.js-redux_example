import { api } from "apis";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect } from "react";
import useSWR from "swr";

const Search = () => {
  const router = useRouter();
  const { query } = router;
  const [term, setTerm] = useState("");
  const { data, error } = useSWR(`${query.keyword}`, api.getSearch);

  console.log(query, data, error);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTerm(target.value);
  };
  return (
    <Fragment>
      <input type="text" onChange={handleChange} />
      <Link href={`/search?keyword=${term}`}>
        <a>Go</a>
      </Link>
    </Fragment>
  );
};

export default Search;
