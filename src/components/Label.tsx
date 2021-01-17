import React from "react";
import styled from "styled-components";

interface ILabelProps {
  size?: string;
  weight?: string;
  color?: string;
  children?: React.ReactNode[] | string;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  id?: string;
  letterSpacing?: string;
}

const StyledLabel = styled.div<ILabelProps>`
  font-size: ${(props) => (props.size ? props.size : "100%")};
  font-weight: ${(props) => (props.weight ? props.weight : "400")};
  color: ${(props) => (props.color ? props.color : "#232323")};
  margin: ${(props) => props.margin && props.margin};
  background-color: ${(props) =>
    props.backgroundColor && props.backgroundColor};
  padding: ${(props) => props.padding && props.padding};
  border-radius: 2px;
  letter-spacing: ${(props) => props.letterSpacing && props.letterSpacing};
`;

const Label: React.FC<ILabelProps> = (props) => {
  return <StyledLabel {...props}>{props.children}</StyledLabel>;
};

export default Label;
