import { ActionTypes } from "../constants/actionTypes";

export const setUsers = (users) => {
  return {
    type: ActionTypes.GET_USERS,
    payload: users,
  };
};

export const setSingleUser = (user) => {
  return {
    type: ActionTypes.GET_SINGLE_USER,
    payload: user,
  };
};

export const getRepos = (repos) => {
  return {
    type: ActionTypes.GET_REPOS,
    payload: repos,
  };
};
