import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface IDropdownProps {
  value?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
}

const DropdownWrapper = styled.div``;

const DropdownDefault = styled.div``;

const DropdownOptions = styled.div<{ status: boolean }>`
  display: ${(props) => (props.status ? "block" : "none")};
`;

const Dropdown: React.FC<IDropdownProps> = ({
  value = "",
  onClick,
  children,
}) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [value]);
  return (
    <DropdownWrapper>
      <DropdownDefault onClick={() => setOpen((prev) => !prev)}>
        {value.length === 0 ? "선택해주세요" : value}
      </DropdownDefault>
      <DropdownOptions onClick={onClick} status={open}>
        {children}
      </DropdownOptions>
    </DropdownWrapper>
  );
};

export default Dropdown;
