import { combineReducers } from "redux";
import showSidebarReducer from "./showSidebar/reducer";
import usersReducer from "./user/reducer";

const rootReducer = combineReducers({
  showSidebar: showSidebarReducer,
  users: usersReducer
});

export default rootReducer;
