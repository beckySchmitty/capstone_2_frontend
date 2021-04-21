import movies from "./movies_bechdel"
import OMDB from "./movies_OMDB"
import currentUser from './users';
import { combineReducers } from "redux";

export default combineReducers({
  movies,
  currentUser,
  OMDB
});