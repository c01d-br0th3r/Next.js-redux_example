import React, { useEffect } from "react";
import styled from "styled-components";
import DaumPostCode from "react-daum-postcode";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "store/reducers";
import allActions from "../store/actions";
import { useRouter } from "next/router";

const Layout = styled.div`
  position: absolute;
  width: 100%;
  top: 56px;
  left: 0;
`;

const Destination = () => {
  const address = useSelector((store: RootStore) => store.address);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    console.log(address);
  }, [address]);
  const handleComplete = (data: any) => {
    console.log(data); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    dispatch(allActions.addressActions.addAddress(data));
    router.push("/");
  };

  return (
    <Layout>
      <DaumPostCode onComplete={handleComplete} />
    </Layout>
  );
};

export default Destination;
