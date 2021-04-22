import {SET_CURR_USER} from "./types"
import backendAPI from "../API/backendAPI"

export function addCurrentUser(currentUser) {
  return async function (dispatch) {
    // let userData = await backendAPI.getCurrentUser(username)
    return dispatch(setCurrentUser(currentUser));
  };
}

function setCurrentUser(currentUser) {
  return {
    type: SET_CURR_USER,
    currentUser,
  };
}