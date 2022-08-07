import React from 'react';
import {Grid, Typography} from "@mui/material";

interface Props {
  title: string;
  img: string;
  episodes: number;
  status: string;
  score: number;
  popularity: number;
}

function AnimeCard({title, img, episodes, status, score, popularity}: Props) {
  return (
    <Grid item xs={3}>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", border: "1px solid black", height: "100%"}}>
        <Typography>{title}</Typography>
        <img src={img} alt={title + " image"}/>
        <Typography>{episodes} episodes</Typography>
        <Typography>{status}</Typography>
        <Typography>{score}</Typography>
        <Typography>{popularity}</Typography>
      </div>
    </Grid>
  );
}

export default AnimeCard;