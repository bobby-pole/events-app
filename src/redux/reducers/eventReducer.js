import { ActionTypes } from "../constants/action-types";

const initialState = {
  events: [],
};

export const eventReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EVENTS:
      return { ...state, events: payload };
    default:
      return state;
  }
};

export const showEventReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_EVENT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const addEventReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_EVENT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
