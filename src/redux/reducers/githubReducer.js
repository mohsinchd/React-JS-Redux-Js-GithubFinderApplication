import { ActionTypes } from "../constants/actionTypes";

const initialState = [];

export const usersReducer = (state = initialState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case ActionTypes.GET_USERS:
      return [...payload.items];
    default:
      return state;
  }
};

export const singleUserReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_SINGLE_USER:
      return {
        ...payload,
      };
    default:
      return state;
  }
};

export const getRepos = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_REPOS:
      return [...payload];
    default:
      return state;
  }
};
