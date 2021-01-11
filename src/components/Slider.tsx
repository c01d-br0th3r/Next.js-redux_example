import React from "react";
import styled from "styled-components";

interface ISliderProps {
  children?: React.ReactNode[];
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  overflow-x: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Layout: React.FC<ISliderProps> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Layout;
