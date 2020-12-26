import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState, useEffect } from "react";
import { gql } from "@apollo/client";
import { client } from "../apolloClient";

const Search = () => {
  const [term, setTerm] = useState("");
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { query } = router;

  const fetchData = async (keyword: string) => {
    try {
      setLoading(true);
      const { data } = await client.query({
        query: gql`
          query GetLaunches {
            launchesPast(find: { mission_name: "${keyword}" }) {
              id
              mission_name
              launch_date_local
              launch_site {
                site_name_long
              }
              links {
                article_link
                video_link
                mission_patch
              }
              rocket {
                rocket_name
              }
            }
          }
        `,
      });
      setLaunches(data.launchesPast);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query && query.keyword) {
      const keyword = query.keyword as string;
      fetchData(keyword);
    }
  }, [query]);

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
      <div>Result</div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        launches.map((l: any, idx: any) => (
          <div key={idx}>{l.mission_name}</div>
        ))
      )}
    </Fragment>
  );
};

export default Search;
