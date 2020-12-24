import React from "react";
import styled from "styled-components";

interface ILayoutProps {
  children?: React.ReactNode;
}

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 18px;
  padding-bottom: 80px;
`;

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Layout;
