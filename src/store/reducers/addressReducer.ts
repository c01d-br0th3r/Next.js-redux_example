import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";

type CounterState = {
  address: any;
};

const initialState: CounterState = {
  address: {},
};

const address = (state: CounterState = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.adress };
    case "addressActions/ADD_ADDRESS":
      return { ...state, address: action.payload };
    case "addressActions/DELETE_ADDRESS":
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export default address;
