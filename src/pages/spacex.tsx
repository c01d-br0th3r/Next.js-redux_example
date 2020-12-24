import React, { Fragment } from "react";
import { InferGetStaticPropsType } from "next";
import { gql } from "@apollo/client";
import { client } from "../apolloClient";

const SpaceX = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { launches } = props;
  return (
    <div>
      {launches.map((launch: any) => (
        <Fragment key={launch.id}>
          <div>{launch.mission_name}</div>
        </Fragment>
      ))}
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

export default SpaceX;
