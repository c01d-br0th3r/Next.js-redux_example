import Dropdown from "components/Dropdown";
import Label from "components/Label";
import React, { useState } from "react";

const Category = () => {
  const [value, setValue] = useState("");
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    setValue(target.innerText);
  };
  return (
    <div>
      <Dropdown onClick={handleClick} value={value}>
        <Label>10</Label>
        <Label>20</Label>
        <Label>30</Label>
        <Label>40</Label>
        <Label>50</Label>
      </Dropdown>
    </div>
  );
};

export default Category;
