import React, { Fragment } from "react";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import styled from "styled-components";

import Layout from "../../components/Layout";
import Box from "../../components/Box";
import Section from "../../components/Section";
import Slider from "../../components/Slider";
import Label from "../../components/Label";
import StackNavigation from "../../components/StackNavigation";

import { gql } from "@apollo/client";
import { client } from "../../apolloClient";

const MenuList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 12px;
  border-bottom: 1px solid #a2a2a2;
  font-size: 14px;
`;

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { popularMovies } = props;
  return (
    <Fragment>
      <MenuList>
        <Link href="/okkot">
          <a>
            <Label>홈</Label>
          </a>
        </Link>
        <Link href="/okkot/best">
          <a>
            <Label>베스트</Label>
          </a>
        </Link>
        <Link href="/okkot/new">
          <a>
            <Label>신상품</Label>
          </a>
        </Link>
        <Link href="/okkot/chance">
          <a>
            <Label>기획전</Label>
          </a>
        </Link>
      </MenuList>
      <Box width="100%" height="200px" backgroudColor="#a2a2a2" />
      <Layout>
        <Section>
          <Label size="20px" weight="500" margin="16px 0 8px 0">
            여기는 신상품입니다.
          </Label>
          <Slider>
            {popularMovies.map((popular: any) => (
              <Box
                key={popular.id}
                width="150px"
                height="200px"
                label={popular.mission_name}
                margin="0 8px 0 0"
              />
            ))}
          </Slider>
        </Section>
        <Section>
          <Label size="20px" weight="500" margin="16px 0 8px 0">
            카테고리
          </Label>
          <Slider>
            {popularMovies.map((popular: any) => (
              <Box
                key={popular.id}
                width="70px"
                height="70px"
                margin="0 8px 0 0"
                backgroudColor="#fff"
              />
            ))}
          </Slider>
        </Section>
        <Section>
          <Label size="20px" weight="500" margin="16px 0 8px 0">
            최신 영화에요.
          </Label>
        </Section>
      </Layout>
      <StackNavigation />
    </Fragment>
  );
};

export const getStaticProps = async () => {
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
  return {
    props: {
      popularMovies: data.launchesPast,
    },
  };
};

export default Home;
