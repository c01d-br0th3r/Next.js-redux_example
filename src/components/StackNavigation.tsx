import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Label from "./Label";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #f3f3f3;
  padding: 24px 36px;
`;

const StackNavigation = () => {
  return (
    <StyledDiv>
      <Link href="/okkot">
        <a>
          <Label>홈</Label>
        </a>
      </Link>
      <Link href="/okkot/category">
        <a>
          <Label>카테고리</Label>
        </a>
      </Link>
      <Link href="/okkot/search">
        <a>
          <Label>검색</Label>
        </a>
      </Link>
      <Link href="/okkot/mypage">
        <a>
          <Label>마이페이지</Label>
        </a>
      </Link>
    </StyledDiv>
  );
};

export default StackNavigation;
