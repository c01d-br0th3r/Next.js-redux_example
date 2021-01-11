import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";

interface IProps {
  handleSearchBox: React.MouseEventHandler<HTMLElement>;
  handleChange: React.ChangeEventHandler<HTMLElement>;
  term: string;
}

const SearchWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #a2a2a2;
  opacity: 0.7;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  z-index: 20;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
`;

const SearchBox: React.FC<IProps> = ({
  handleSearchBox,
  handleChange,
  term,
}) => {
  return (
    <SearchWrapper>
      <StyledDiv onClick={handleSearchBox} />
      <InputBox>
        <Input type="text" onChange={handleChange} />
        <Link href={`/okkot/search?keyword=${term}`}>
          <a>
            <Label onClick={handleSearchBox}>GO</Label>
          </a>
        </Link>
      </InputBox>
    </SearchWrapper>
  );
};

export default SearchBox;
