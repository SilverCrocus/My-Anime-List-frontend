import React from 'react';
import {Grid} from "@mui/material";
import AnimeCard from "./AnimeCard";
import {animeDataType} from "../api/Api";

interface Props {
  cardsList: animeDataType[];
}

function AnimeCardContainer({cardsList}: Props) {
  return (
    <div style={{borderTop: "black 1px solid", marginTop: "5%", width: "95%", paddingTop: "3%"}}>
      <Grid container spacing={3}>
        {cardsList.map((card, i) => <AnimeCard key={i} title={card.title} status={card.status}
                                               popularity={card.popularity} episodes={card.episodes}
                                               img={card.images.jpg.image_url} score={card.score}/>)}
      </Grid>
    </div>
  );
}

export default AnimeCardContainer;