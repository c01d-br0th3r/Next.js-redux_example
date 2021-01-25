import { combineReducers } from "redux";
import counter from "./counterReducer";
import address from "./addressReducer";

const rootReducer = combineReducers({ counter, address });

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;
