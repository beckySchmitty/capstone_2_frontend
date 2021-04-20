import {SET_CURR_USER} from "./types"
import backendAPI from "../API/backendAPI"

export function addCurrentUser(userData) {
  return async function (dispatch) {
    const response = await backendAPI.signup(userData);
    console.log(`!!!!!!!!!!!!!!!!${response}`)
    return dispatch(setCurrentUser(response.data));
  };
}

function setCurrentUser(currentUser) {
  return {
    type: SET_CURR_USER,
    currentUser,
  };
}