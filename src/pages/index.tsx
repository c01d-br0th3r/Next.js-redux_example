import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "store/reducers";
import { wrapper } from "store/reducers/configureStore";
import styled from "styled-components";
import allActions from "../store/actions";

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Home = () => {
  const counterState = useSelector((store: RootStore) => store.counter);
  const addressState = useSelector((store: RootStore) => store.address);
  const dispatch = useDispatch();
  console.log(counterState);
  console.log(addressState);
  return (
    <>
      <Title>{counterState.count}</Title>
      <button onClick={() => dispatch(allActions.counterActions.increase())}>
        +
      </button>
      <Link href="/destination">
        <a>
          <h2>배송지 입력</h2>
        </a>
      </Link>
      <h1>{addressState.address.address}</h1>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  console.log("Hello ssr!");
  ctx.store.dispatch(allActions.counterActions.increase());
  ctx.store.dispatch(allActions.counterActions.increase());
  ctx.store.dispatch(allActions.counterActions.increase());
  console.log(ctx.store);
});

export default Home;
