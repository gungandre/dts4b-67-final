import { React, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { data, selectMovies } from "../reducers/reducer";
import MovieCard from "./MovieCard";
import { SORT } from "../reducers/reducer";
import { useSearchParams } from "react-router-dom";

const Movielist = () => {
  const [queryParams, setQueryParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(data());
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [dispatch]);

  const setSortParam = (type) => {
    queryParams.set("sort", type);
    setQueryParams(queryParams);
    dispatch(SORT(queryParams.get("sort")));
  };

  const movieList = useSelector(selectMovies);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ ml: 2 }}>
          <Typography variant="h3">Movies</Typography>
        </Box>
        <Box>
          Sort by Rating
          <Button
            variant="contained"
            sx={{ ml: 2 }}
            onClick={() => setSortParam("asc")}
          >
            Asc
          </Button>
          <Button
            variant="contained"
            sx={{ ml: 2, mr: 2 }}
            onClick={() => setSortParam("desc")}
          >
            Desc
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {movieList.map((movie) => (
          <MovieCard key={movie.title} movie={movie}></MovieCard>
        ))}
      </Box>
      <Button
        variant="contained"
        sx={{ ml: 2, mr: 2 }}
        onClick={() => dispatch(data({ type: "popular", page: 1 }))}
      >
        Load More
      </Button>
    </Box>
  );
};

export default Movielist;
