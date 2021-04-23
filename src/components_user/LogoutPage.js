import React,  {useEffect} from "react"
import {useDispatch} from "react-redux";
import { LOGOUT_CURR_USER } from "../actions/types";


const LogoutPage = () => {
    // const history = useHistory();
    const dispatch = useDispatch();


    useEffect(function LogoutUser() {
      async function logout() {
        dispatch({type: LOGOUT_CURR_USER})
      }
      logout()
    }, [dispatch]);


    return (
            <div>
                <h1>Successfully logged out, come back soon! </h1>

            </div>
    )
}

export default LogoutPage;

