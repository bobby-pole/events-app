import { ActionTypes } from "../constants/action-types";

export const setEvents = (events) => {
  return {
    type: ActionTypes.SET_EVENTS,
    payload: events,
  };
};

export const addEvent = (event) => {
  return {
    type: ActionTypes.ADD_EVENTS,
    payload: event,
  };
};

export const editEvent = (event) => {
  return {
    type: ActionTypes.EDIT_EVENT,
    payload: event,
  };
};

export const deleteEvent = (event) => {
  return {
    type: ActionTypes.DELETE_EVENT,
    payload: event,
  };
};

export const showEvent = (event) => {
  return {
    type: ActionTypes.SHOW_EVENT,
    payload: event,
  };
};
