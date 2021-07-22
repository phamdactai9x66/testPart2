import React from "react";
import { combineReducers } from "redux"
import { reducerMouse } from "./Mouse/reducerMouse";

const combineReducer = combineReducers({
    Mouse: reducerMouse
})
export default combineReducer