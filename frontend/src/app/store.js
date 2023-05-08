import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import imageSlice from "../features/imageSlice";

export const store = configureStore({
    reducer: {
        images:imageSlice
    },
}, applyMiddleware(thunk))