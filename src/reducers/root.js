import movies from "./movies"
import OMDB from "./moviesTwo"
import users from './users';
import { combineReducers } from "redux";

export default combineReducers({
  movies,
  users,
  OMDB
});