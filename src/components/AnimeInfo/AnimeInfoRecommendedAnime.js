import {
  Divider,
  Grid,
  Typography,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import AnimeInfoAnimeDetails from "./AnimeInfoAnimeDetails";
import { useNavigate, Link } from "react-router-dom";

import LoadingScreen from "../LoadingScreen";
import ReactPlayer from "react-player";

function AnimeInfoRecommendedAnime(props) {
  const [animeRecommendationsList, setAnimeRecommendationsList] = useState();
  let navigate = useNavigate();

  const getAnimeRecs = useCallback(async (id) => {
    try {
      let animeRecommendationsData = await fetch(
        `https://api.jikan.moe/v4/anime/${id}/recommendations`,
      ).then((res) => res.json());
      let animeRecommendationsDataResults = animeRecommendationsData.data;

      console.log("Recs", animeRecommendationsDataResults);
      setAnimeRecommendationsList(animeRecommendationsDataResults);
    } catch (error) {
      console.log("Anime Recs not found");
    }
  }, []);

  useEffect(() => {
    if (!animeRecommendationsList) {
      getAnimeRecs(props.animeId);
    }
  }, [animeRecommendationsList, getAnimeRecs, props.animeId]);

  if (animeRecommendationsList) {
    return (
      <div>
        <Link
          to='/anime-recs-page'
          state={{
            animeId: props.animeId,
            animeRecList: animeRecommendationsList,
          }}
        >
          <Typography>View More</Typography>
        </Link>
        <div className='anime-info-rec-anime-container'>
          <ImageList cols={5} rowHeight={400}>
            {animeRecommendationsList.slice(0, 5).map((info) => {
              let recAnime = info.entry;

              return (
                <div>
                  <div className='anime-info-rec-anime-item'>
                    <ImageListItem>
                      <img
                        src={recAnime.images.jpg.image_url}
                        alt={recAnime.title}
                        onClick={(e) => {
                          navigate(`/anime-info`, {
                            state: {
                              animeId: recAnime.mal_id,
                              animeRecList: animeRecommendationsList,
                            },
                          });
                          window.location.reload();
                        }}
                      />
                      <ImageListItemBar title={recAnime.title} />
                    </ImageListItem>
                    {/* <Typography>{recAnime.title}</Typography> */}
                  </div>
                </div>
              );
            })}
          </ImageList>
        </div>
      </div>
    );
  } else {
    return <LoadingScreen />;
  }
}

export default AnimeInfoRecommendedAnime;
