import { combineReducers } from "redux";
import { userSlice } from "../features/userSlice.tsx";

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});
