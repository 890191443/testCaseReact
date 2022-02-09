import {
  SEARCH_ALL_USER,
  SEARCH_USER,
  SET_USERS,
  SET_LOADING,
  SET_ERROR,
} from "./actionType";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SEARCH_ALL_USER:
      return {
        ...state,
        users: action.payload,
      };

    case SEARCH_USER:
      return {
        ...state,
        users: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
