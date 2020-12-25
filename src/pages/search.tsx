import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import { gql } from "@apollo/client";
import { client } from "../apolloClient";

const Search = (props: any) => {
  const [term, setTerm] = useState("");
  const { launches } = props;
  console.log(launches);
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
      {launches.map((l: any) => (
        <div>{l.mission_name}</div>
      ))}
    </Fragment>
  );
  {
    /*return (
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
      );*/
  }
};

export const getServerSideProps = async (ctx: any) => {
  const { keyword } = ctx.query;
  if (!keyword) {
    return {
      props: {
        launches: [],
      },
    };
  }
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
  return {
    props: {
      launches: data.launchesPast,
    },
  };
};

/*
export const getStaticProps = async (context: any) => {
  console.time("a");
  console.log(context);
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
};*/

export default Search;
