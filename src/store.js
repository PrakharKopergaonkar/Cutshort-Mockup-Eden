import thunk from "redux-thunk";
import {stepReducer} from "./reducers/stepReducers.js";
import {basicDetailsReducer} from './reducers/basicDetailsReducers'
import { configureStore, combineReducers} from "@reduxjs/toolkit";
import { workspaceDetailsReducer } from "./reducers/workspaceDetailsReducers.js";
import { workspaceTypeReducer } from "./reducers/workspaceTypeReducers.js";
const reducer = combineReducers({
	step: stepReducer,
	basicDetails: basicDetailsReducer,
	workspaceDetails: workspaceDetailsReducer,
	workspaceType: workspaceTypeReducer
});


const middleware = [thunk];
const store = configureStore({
	reducer,
    middleware: middleware
});

export default store;
