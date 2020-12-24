import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { gql } from "@apollo/client";
import { client } from "../apolloClient";

const Search = (props: any) => {
  const [term, setTerm] = useState("");
  const router = useRouter();
  const { launches } = props;
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTerm(target.value);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <Link href={`/search?keyword=${term}`}>
        <a>Go</a>
      </Link>
      <div>search</div>
      {router.query.keyword ? (
        <div>
          {launches
            .filter((l: any) => l.mission_name.includes(router.query.keyword))
            .map((la: any) => (
              <div>{la.mission_name}</div>
            ))}
        </div>
      ) : (
        <div>Input Text</div>
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  console.time("a");
  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: ${10}) {
        
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

  console.timeEnd("a");
  return {
    props: {
      launches: data.launchesPast,
    },
  };
};

export default Search;
