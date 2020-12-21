import counterActions from "../actions/counterActions";

type CounterAction =
  | ReturnType<typeof counterActions.counterIncrease>
  | ReturnType<typeof counterActions.counterDecrease>;

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const count = (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case "COUNTER_INCREASE":
      return { ...state, value: state.value + 1 };
    case "COUNTER_DECREASE":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default count;
