import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {entitiesReducer} from "./entites/reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
    ],
    devTools: process.env.NODE_ENV !== "production",
});