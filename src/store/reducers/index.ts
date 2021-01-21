import { combineReducers } from "redux";
import counter from "./counterReducer";

const rootReducer = combineReducers({ counter });

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;
