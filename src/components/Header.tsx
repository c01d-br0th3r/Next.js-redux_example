import React from "react";
import styled from "styled-components";
import Label from "./Label";

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 12px;
  border-bottom: 1px solid #a2a2a2;
`;

const Icon = styled.div`
  position: absolute;
  top: 12px;
  right: 24px;
`;

const Header = () => {
  return (
    <StyledDiv>
      <Label size="18px" weight="500" color="#727272">
        오늘의영화
      </Label>
      <Icon>
        <i className="fas fa-cart-arrow-down" />
      </Icon>
    </StyledDiv>
  );
};

export default Header;
