import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import todolistReducer from "./todolistReducer";

export default combineReducers({
    register:registerReducer,
    login:loginReducer,
    todo:todolistReducer,
})