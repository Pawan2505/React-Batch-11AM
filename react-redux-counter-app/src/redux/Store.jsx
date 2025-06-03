import { legacy_createStore } from "redux";

import { createReducer } from "./Reducer";

export const store = legacy_createStore(createReducer)