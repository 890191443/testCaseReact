import { SET_Show_Sidebar } from "./actionType";

const initialState = {
  isShow: false,
};

const showSidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_Show_Sidebar:
      return {
        isShow: action.payload,
      };
    default:
      return state;
  }
};

export default showSidebarReducer;
