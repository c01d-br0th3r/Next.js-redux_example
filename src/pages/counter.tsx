import { NextPage } from "next";
import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../store/reducers";
import allActions from "../store/actions";

const Counter: NextPage<{}> = () => {
  const count = useSelector((store: RootStore) => store.count.value);
  const dispatch = useDispatch();
  const handleIncrease = () =>
    dispatch(allActions.counterActions.counterIncrease());
  const handleDecrease = () =>
    dispatch(allActions.counterActions.counterDecrease());
  return (
    <Fragment>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
    </Fragment>
  );
};

export default Counter;
