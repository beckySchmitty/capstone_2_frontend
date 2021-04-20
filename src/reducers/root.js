import movies from "./movies"
import OMDB from "./moviesTwo"
import currentUser from './users';
import { combineReducers } from "redux";

export default combineReducers({
  movies,
  currentUser,
  OMDB
});