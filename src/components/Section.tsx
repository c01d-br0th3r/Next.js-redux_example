import React from "react";
import styled from "styled-components";

interface ISectionProps {
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

const StyledDiv = styled.div<ISectionProps>`
  padding: ${(props) => props.padding && props.padding};
  margin: ${(props) => props.margin && props.margin};
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
`;

const Section: React.FC<ISectionProps> = ({
  padding = "18px 0 18px 0",
  margin,
  backgroundColor,
  children,
}) => {
  return (
    <StyledDiv
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
