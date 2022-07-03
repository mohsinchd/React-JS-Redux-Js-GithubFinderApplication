import { combineReducers } from "redux";
import { usersReducer, singleUserReducer, getRepos } from "./githubReducer";

const reducers = combineReducers({
  allUsers: usersReducer,
  singleUser: singleUserReducer,
  latestRepos: getRepos,
});

export default reducers;
