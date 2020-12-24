import React from "react";
import styled from "styled-components";

interface IBoxProps {
  width?: string;
  height: string;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  backgroudColor?: string;
  margin?: string;
}

const StyledBox = styled.div<IBoxProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "120px")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: ${(props) =>
    props.backgroudColor ? props.backgroudColor : "#a2a2a2"};
  margin: ${(props) => props.margin && props.margin};
  border: 1px solid #a2a2a2;
`;

const Box: React.FC<IBoxProps> = ({
  width,
  height,
  label,
  onClick,
  backgroudColor,
  margin,
}) => {
  return (
    <StyledBox
      width={width}
      height={height}
      onClick={onClick}
      backgroudColor={backgroudColor}
      margin={margin}
    >
      {label}
    </StyledBox>
  );
};

export default Box;
