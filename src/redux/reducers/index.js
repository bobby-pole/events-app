import { combineReducers } from "redux";
import {
  eventReducer,
  showEventReducer,
  addEventReducer,
} from "./eventReducer";

const reducers = combineReducers({
  allEvents: eventReducer,
  event: showEventReducer,
  events: addEventReducer,
});

export default reducers;
