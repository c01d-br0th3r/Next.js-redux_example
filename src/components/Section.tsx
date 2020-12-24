import React from "react";
import styled from "styled-components";

interface ISectionProps {
  padding?: string;
  margin?: string;
  children: React.ReactNode;
}

const StyledDiv = styled.div<ISectionProps>`
  padding: ${(props) => props.padding && props.padding};
  margin: ${(props) => props.margin && props.margin};
`;

const Section: React.FC<ISectionProps> = ({
  padding = "18px 0 18px 0",
  margin,
  children,
}) => {
  return (
    <StyledDiv padding={padding} margin={margin}>
      {children}
    </StyledDiv>
  );
};

export default Section;
