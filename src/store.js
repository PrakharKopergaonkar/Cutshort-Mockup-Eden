import thunk from "redux-thunk";
import {stepReducer} from "./reducers/stepReducers.js";
import { configureStore, combineReducers} from "@reduxjs/toolkit";
const reducer = combineReducers({
	step: stepReducer
});


const middleware = [thunk];
const store = configureStore({
	reducer,
    middleware: middleware
});

export default store;
