import Dropdown from "components/Dropdown";
import Label from "components/Label";
import React from "react";
import { GetStaticProps } from "next";

import { gql } from "@apollo/client";
import { client } from "apolloClient";
import { useDropdown } from "hooks/useDropdown";

const Category = (props: any) => {
  const { launches } = props;
  const dropDownProps = useDropdown();
  return (
    <div>
      <Dropdown {...dropDownProps}>
        <Label id="up">오름차순</Label>
        <Label id="down">내림차순</Label>
      </Dropdown>
      {launches.map((l: any) => (
        <div key={l.id}>
          <div>{l.mission_name}</div>
          <div>{l.launch_date_local}</div>
          <br />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
            query GetLaunches {
              launchesPast(limit: ${20}) {
              
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

export default Category;
