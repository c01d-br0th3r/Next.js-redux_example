import counterActions from "../actions/counterActions";
import { HYDRATE } from "next-redux-wrapper";

type CounterAction =
  | ReturnType<typeof counterActions.counterIncrease>
  | ReturnType<typeof counterActions.counterDecrease>
  | { type: typeof HYDRATE };

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const count = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state };
    case "COUNTER_INCREASE":
      return { ...state, value: state.value + 1 };
    case "COUNTER_DECREASE":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default count;
