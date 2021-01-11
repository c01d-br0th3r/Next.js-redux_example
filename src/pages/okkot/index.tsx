import React, { Fragment } from "react";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

import Layout from "../../components/Layout";
import Box from "../../components/Box";
import Section from "../../components/Section";
import Slider from "../../components/Slider";
import Label from "../../components/Label";

import { gql } from "@apollo/client";
import { client } from "../../apolloClient";

const MenuList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 12px;
  border-bottom: 1px solid #a2a2a2;
  font-size: 14px;
  position: sticky;
  background-color: #fff;
  top: 0;
  z-index: 50;
`;

const Card = styled.div`
  width: 35vw;
  flex-shrink: 0;
  margin-right: 8px;
  img {
    border-radius: 5px;
  }
`;

const Card2 = styled.div`
  position: relative;
  width: 100%;
  img {
    border-radius: 5px;
  }
  letter-spacing: -0.8px;
  color: #434343;
  margin-bottom: 10px;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Badge = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  opacity: 0.8;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #ff6b5d;
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
            여기는 홈입니다.
          </Label>
          <Slider>
            {popularMovies.map((popular: any) => (
              <Card>
                <Image
                  src="https://static.okkot.com/assignment/png-test-image.png"
                  alt=""
                  width={80}
                  height={100}
                  layout="responsive"
                />
                <Label margin="8px 0 0 0">{popular.mission_name}</Label>
              </Card>
            ))}
          </Slider>
        </Section>
        <Section>
          <Label>카테고리</Label>
          <Slider>
            {popularMovies.map((popular: any) => (
              <Card>
                <Image
                  key={popular.id}
                  src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/161007788172739519.jpeg?gif=1&w=240&h=240&c=c"
                  alt=""
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </Card>
            ))}
          </Slider>
        </Section>
        <Section>
          <Label size="20px" weight="500" margin="16px 0 8px 0">
            여기는 리스트입니다.
          </Label>
          <Grid>
            {popularMovies.map((popular: any, idx: number) => (
              <Card2 key={popular.id}>
                <Badge>{idx + 1}</Badge>
                <Image
                  src="https://static.okkot.com/assignment/jpeg-test-image.jpeg"
                  alt=""
                  width={80}
                  height={100}
                  layout="responsive"
                />
                <Label size="16px" margin="12px 0 4px 0">
                  라넌큘러스라넌라넌
                </Label>
                <Price>
                  <Label
                    margin="0 8px 0 0"
                    color="#ff6d5b"
                    weight="600"
                    size="18px"
                  >
                    35%
                  </Label>
                  <Label color="#212121" weight="600" size="18px">
                    5,300원
                  </Label>
                </Price>
                <Price>
                  <Label
                    margin="0 4px 0 0"
                    color="#ff6d5b"
                    weight="400"
                    size="12px"
                    padding="3px 8px"
                    backgroundColor="rgba(255, 107, 93, 0.09)"
                  >
                    특가
                  </Label>
                  <Label
                    color="#5999ff"
                    weight="400"
                    size="12px"
                    padding="3px 8px"
                    backgroundColor="#eef5ff"
                  >
                    무료배송
                  </Label>
                </Price>
              </Card2>
            ))}
          </Grid>
        </Section>
      </Layout>
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
