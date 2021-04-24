import {SET_CURR_USER} from "./types"
import backendAPI from "../API/backendAPI"

export function addCurrentUser(username) {
  return async function (dispatch) {
    let data = await backendAPI.getCurrentUser(username)
    return dispatch(setCurrentUser(data.user));
  };
}

function setCurrentUser(currentUser) {
  return {
    type: SET_CURR_USER,
    currentUser,
  };
}

// export function addToWatchList(imdb_id) {
//   return async function (dispatch) {
//     let data = await backendAPI.getCurrentUser(username)
//     return dispatch(setCurrentUser(data.user));
//   };
// }

// function setCurrentUser(currentUser) {
//   return {
//     type: SET_CURR_USER,
//     currentUser,
//   };
// }