import { query } from "express";
import { useRouter } from "next/router";
import React from "react";

const Inf = () => {
  const router = useRouter();
  return <h2>{router.query.id}</h2>;
};

export default Inf;
