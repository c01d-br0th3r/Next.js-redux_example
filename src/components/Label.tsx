import React from "react";
import styled from "styled-components";

interface ILabelProps {
  size?: string;
  weight?: string;
  color?: string;
  children?: React.ReactNode[] | string;
  margin?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const StyledLabel = styled.div<ILabelProps>`
  font-size: ${(props) => (props.size ? props.size : "100%")};
  font-weight: ${(props) => (props.weight ? props.weight : "120px")};
  color: ${(props) => (props.color ? props.color : "#232323")};
  margin: ${(props) => props.margin && props.margin};
`;

const Label: React.FC<ILabelProps> = (props) => {
  return <StyledLabel {...props}>{props.children}</StyledLabel>;
};

export default Label;
