import { useState } from "react";

export const useDropdown = () => {
  const [open, _setOpen] = useState<boolean>(false);
  const [value, _setValue] = useState<string>("");
  const setOpen = () => {
    _setOpen((prev) => !prev);
  };
  const setValue = (e: React.MouseEvent) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    _setValue(target.innerText);
    _setOpen(false);
  };
  return { open, setOpen, value, setValue };
};
