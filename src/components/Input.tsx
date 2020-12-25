import React from "react";
import styled from "styled-components";

interface IInputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLElement>;
}

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #a2a2a2;
  outline: none;
  border-radius: 8px;
`;

const Input: React.FC<IInputProps> = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
