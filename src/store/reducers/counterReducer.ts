import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

const count = (state: CounterState = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.counter };
    case "counterActions/INCREASE":
      return { ...state, count: state.count + 1 };
    case "counterActions/DECREASE":
      return { ...state, count: state.count - 1 };
    case "counterActions/INCREASE_BY":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};

export default count;
