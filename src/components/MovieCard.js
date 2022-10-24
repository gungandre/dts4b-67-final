import { React, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal, Rating, Fade, Backdrop } from "@mui/material";
import { Box } from "@mui/system";

import { useDispatch } from "react-redux";
import { data } from "../reducers/reducer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(data());
    } catch (error) {
      console.log(error);
    }
  }, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="auto"
        image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {new Date(movie.release_date).getFullYear()}
        </Typography>
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="read-only"
            precision={0.1}
            value={movie.vote_average / 2}
            max={5}
            readOnly
          />
          <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(1)}</Box>
        </Box>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen}>DETAIL</Button>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <CardMedia
                component="img"
                height="auto"
                image={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {new Date(movie.release_date).getFullYear()}
                </Typography>
                <Typography>{movie.overview}</Typography>
                <br></br>
                <Box
                  sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="read-only"
                    precision={0.1}
                    value={movie.vote_average / 2}
                    max={5}
                    readOnly
                  />
                  <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(1)}</Box>
                </Box>
              </CardContent>
            </Box>
          </Fade>
        </Modal>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
