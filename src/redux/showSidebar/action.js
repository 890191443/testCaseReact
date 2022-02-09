import { SET_Show_Sidebar } from "./actionType";

export const setShowSideBar = (isShow) => {
  return {
    type: SET_Show_Sidebar,
    payload: isShow,
  };
};
