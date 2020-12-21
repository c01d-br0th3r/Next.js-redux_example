import { combineReducers } from "redux";
import count from "./counterReducers";

const rootReducer = combineReducers({ count });

export type RootStore = ReturnType<typeof rootReducer>;
export default rootReducer;
