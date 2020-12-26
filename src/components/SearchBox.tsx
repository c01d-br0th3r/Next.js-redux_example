import Link from "next/link";
import React, { Fragment } from "react";
import styled from "styled-components";
import Input from "./Input";
import Label from "./Label";

interface IProps {
  handleSearchBox: React.MouseEventHandler<HTMLElement>;
  handleChange: React.ChangeEventHandler<HTMLElement>;
  term: string;
}

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #a2a2a2;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0.7;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 24px;
  z-index: 20;
  background-color: #fff;
`;

const SearchBox: React.FC<IProps> = ({
  handleSearchBox,
  handleChange,
  term,
}) => {
  return (
    <Fragment>
      <StyledDiv onClick={handleSearchBox} />
      <InputBox>
        <Input type="text" onChange={handleChange} />
        <Link href={`/okkot/search?keyword=${term}`}>
          <a>
            <Label onClick={handleSearchBox}>GO</Label>
          </a>
        </Link>
      </InputBox>
    </Fragment>
  );
};

export default SearchBox;
