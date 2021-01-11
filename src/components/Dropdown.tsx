import React from "react";
import styled from "styled-components";

interface IDropdownProps {
  children?: React.ReactNode;
  open?: boolean;
  setOpen?: () => void;
  value?: string;
  setValue?: (e: React.MouseEvent) => void;
}

const DropdownWrapper = styled.div``;

const DropdownDefault = styled.div``;

const DropdownOptions = styled.div<{ status: boolean }>`
  display: ${(props) => (props.status ? "block" : "none")};
`;

const Dropdown: React.FC<IDropdownProps> = ({
  children,
  open = false,
  setOpen,
  value = "",
  setValue,
}) => {
  return (
    <DropdownWrapper>
      <DropdownDefault onClick={setOpen}>
        {value.length === 0 ? "선택해주세요" : value}
      </DropdownDefault>
      <DropdownOptions onClick={setValue} status={open}>
        {children}
      </DropdownOptions>
    </DropdownWrapper>
  );
};

export default Dropdown;
