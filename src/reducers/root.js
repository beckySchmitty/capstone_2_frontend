import movies from "./movies"
import users from './users';
import { combineReducers } from "redux";

export default combineReducers({
  movies,
  users,
});