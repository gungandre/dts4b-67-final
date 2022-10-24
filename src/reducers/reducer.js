import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  username: "",
  password: "",
};

const stateMovie = { moviess: [] };

export const data = createAsyncThunk("movies", async (tipe) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${tipe.type}?api_key=1dacb2f737a1b40a440e353cbef0544d&language=en-US&page=1`
  );

  return { data: response.data.results, more: tipe.page };
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: stateMovie,
  reducers: {
    SORT: (state, action) => {
      if (action.payload === "asc") {
        state.moviess.sort((a, b) => a.vote_average - b.vote_average);
      } else {
        state.moviess.sort((a, b) => b.vote_average - a.vote_average);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(data.fulfilled, (state, action) => {
      const data = action.payload.data;
      const more = action.payload.more;
      console.log(more);
      if (more === 1) {
        console.log(more);
        state.moviess.push(...data);
      } else if (more === 0) {
        console.log(more);
        state.moviess.splice(0, state.moviess.length);
        state.moviess.push(...data);
      }
    });
  },
});

export const { setUsername, setPassword } = userSlice.actions;
export const selectUser = (state) => state.user.username;
export const selectPassword = (state) => state.user.password;
export const selectMovies = (state) => state.movies.moviess;
export const { SORT } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
export const userReducer = userSlice.reducer;
