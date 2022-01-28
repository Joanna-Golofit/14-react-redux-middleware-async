import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./userTypes";

//action creator is a function that creates/returns an action, which is an object with type (?and payload) property:
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// this is special action creator (thanks to redux-thunk) it can return other function instead of returning an action = an object with type.
// and what is special BOUT THIS FUNCTION IT DOESN'T have to be pure - it can have side effects such as async API calls
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest); // to set loading to true
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data
        dispatch(fetchUsersSuccess(users));
      })
      .catch(error => {
        const errorMsg = error.message
        dispatch(fetchUsersFailure(errorMsg));
      })
  };
};
