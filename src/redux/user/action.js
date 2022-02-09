import {
  SEARCH_ALL_USER,
  SEARCH_USER,
  SET_USERS,
  SET_LOADING,
  SET_ERROR,
} from "./actionType";
import axios from "axios";

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

export const setLoading = (status) => {
  return {
    type: SET_LOADING,
    payload: status,
  };
};

export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(setLoading(true));

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setUsers(data));
        dispatch(setLoading(false));
        dispatch(setError(null));
      })
      .catch((err) => {
        dispatch(setError(err.message));
        dispatch(setLoading(false));
      });
  };
};

const searchUser = (users, term) => ({
  type: SEARCH_USER,
  payload:
    term === "" ? users : users.filter((list) => list.name.includes(term)),
});
export const filterSearch = (term) => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(searchUser(response.data, term));
      })
      .catch((error) => console.log(error));
  };
};

const searchAllUser = (users, term) => ({
  type: SEARCH_ALL_USER,
  payload:
    term === ""
      ? users
      : users.filter((list) => {
          return (
            list.name.includes(term) ||
            list.username.includes(term) ||
            list.email.includes(term) ||
            list.website.includes(term) ||
            list.phone.includes(term)
          );
        }),
});

export const filterAll = (term) => {
  return function (dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(searchAllUser(response.data, term));
      })
      .catch((error) => console.log(error));
  };
};
