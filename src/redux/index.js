import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";


const allReducers = combineReducers({
    user: userReducer,
})

export default allReducers;