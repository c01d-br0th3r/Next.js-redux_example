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
  const dispatch = useDispatch();
  console.log(counterState);
  return (
    <>
      <Title>{counterState.count}</Title>
      <button onClick={() => dispatch(allActions.counterActions.increase())}>
        +
      </button>
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
