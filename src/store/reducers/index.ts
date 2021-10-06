import { combineReducers } from "redux";
import repositoryReducer from "./repositoryReducer";

const reducers = combineReducers({
  repositories: repositoryReducer,
});
export default reducers;
