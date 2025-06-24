
import { legacy_createStore, applyMiddleware } from "redux";

import { thunk } from "redux-thunk";

import { createReducer } from "./Reducer";


export const store = legacy_createStore(createReducer,applyMiddleware(thunk))