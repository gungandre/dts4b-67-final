import { configureStore } from "@reduxjs/toolkit";
import { userReducer, moviesReducer } from "../reducers/reducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default store;
