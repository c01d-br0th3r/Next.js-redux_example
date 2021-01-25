import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import _ from "lodash";
import Link from "next/link";

const Layout = styled.div`
  width: 100%;
  padding: 60px;
  padding-bottom: 200px;
`;

const Wrapper = styled.div`
  margin-bottom: 20px;
  border: 1px solid #f2f2f2;
`;

const Infinite = () => {
  const {
    posts,
    error,
    isLoadingMore,
    isReachingEnd,
    size,
    setSize,
  } = useInfiniteScroll("/posts");
  const [currentOffset, setCurrentOffset] = useState(0);

  console.log(size, isReachingEnd);
  useEffect(() => {
    const scrollEventHandler = () => {
      setCurrentOffset(window.pageYOffset);
    };
    const throttleScrollEventHandler = _.throttle(scrollEventHandler, 300);
    window.addEventListener("scroll", throttleScrollEventHandler);
    return () =>
      window.removeEventListener("scroll", throttleScrollEventHandler);
  }, []);

  useEffect(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    console.log(scrollTop, clientHeight, scrollHeight);
    if (scrollTop + clientHeight >= scrollHeight - 150) {
      console.log("Trigger!");
      setSize((size) => size + 1);
    }
  }, [currentOffset]);

  return (
    <Layout>
      {posts.map((post: any) => (
        <Wrapper key={post.id}>
          <Link href={`/inf/${post.id}`}>
            <a>
              <h1>{post.title}</h1>
            </a>
          </Link>
          <p>{post.body}</p>
        </Wrapper>
      ))}
      {!isReachingEnd && isLoadingMore && <div>Loading...</div>}
    </Layout>
  );
};

export default Infinite;
