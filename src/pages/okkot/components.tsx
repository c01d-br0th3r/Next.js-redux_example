import React from "react";
import Box from "../../components/Box";
import Header from "../../components/Header";
import Label from "../../components/Label";
import Status from "../../components/Status";

const Home = () => {
  return (
    <div>
      <Box
        width="120px"
        height="120px"
        label="Hello"
        onClick={() => console.log("HELLO")}
      />
      <Label size="20px" weight="600" color="#878787">
        Hello
      </Label>
      <Header />
      <Status isFilled>무료배송</Status>
      <Status>무료배송</Status>
    </div>
  );
};

export default Home;
