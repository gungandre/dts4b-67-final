import { DEFAULT_MODE_STORAGE_KEY } from "@mui/system/cssVars/getInitColorSchemeScript";
import React from "react";
import { selectUser, selectPassword } from "../reducers/reducer";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Movielist from "./Movielist";
import MovieCard from "./MovieCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <Movielist />
    </>
  );
};

export default Home;
