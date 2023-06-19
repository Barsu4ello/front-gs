import {wordSlice} from "./word";
import {combineReducers} from "redux";

export const entitiesReducer = combineReducers({
    words: wordSlice.reducer
})
