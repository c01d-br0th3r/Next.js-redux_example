import React from "react";
import styled from "styled-components";

interface IStateProps {
  isFilled?: boolean;
  children?: React.ReactNode[] | string;
}

const StyledDiv = styled.div<IStateProps>`
  width: 56px;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid #232323;
  background-color: ${(props) => (props.isFilled ? "#232323" : "inherit")};
  color: ${(props) => (props.isFilled ? "#fff" : "#232323")};
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status: React.FC<IStateProps> = ({ isFilled, children }) => {
  return <StyledDiv isFilled={isFilled}>{children}</StyledDiv>;
};

export default Status;
