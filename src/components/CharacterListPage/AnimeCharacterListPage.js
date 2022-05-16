import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoadingScreen from "../LoadingScreen";
import {
  Grid,
  Typography,
  Box,
  Card,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Button,
} from "@mui/material";
import Header from "../mainpage/Header";
import NavigationBar from "../mainpage/navBar/NavigationBar";
import AnimeInfoSideContent from "../AnimeInfo/AnimeInfoSideContent";
import AnimeInfoAnimeDetails from "../AnimeInfo/AnimeInfoAnimeDetails";
import AnimeInfoSideContentSingle from "../AnimeInfo/AnimeInfoSideContentSingle";

function AnimeCharacterListPage(props) {
  const location = useLocation();
  const animeId = location.state.animeId;
  //   const mangaId = location.state.mangaId;

  const [characterList, setCharacterList] = useState();
  const [animeRecommendationsList, setAnimeRecommendationsList] = useState();

  console.log(props, location);
  const getCharacterList = useCallback(
    async (id) => {
      //   console.log(props, location);

      try {
        let animeCharactersData = await fetch(
          `https://api.jikan.moe/v4/anime/${animeId}/characters`,
        ).then((res) => res.json());
        let animeCharactersDataResults = animeCharactersData.data;
        console.log("Chatacters", animeCharactersDataResults);

        setCharacterList(animeCharactersDataResults);
      } catch (error) {
        console.log("Character List not found");
      }

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
    },
    [animeId],
  );

  useEffect(() => {
    if (!characterList) {
      getCharacterList(animeId);
    }
  }, [animeId, characterList, getCharacterList]);

  if (characterList) {
    return (
      <Box>
        <Header />
        <NavigationBar />
        <AnimeInfoAnimeDetails
          animeId={animeId}
          animeRecList={animeRecommendationsList}
          charList={characterList}
        />
        <Box sx={{ display: "flex" }}>
          <AnimeInfoSideContentSingle animeId={animeId} />
          <div className='anime-character-list-contents'>
            <Grid container>
              <ImageList
                cols={characterList.length >= 10 ? 10 : 5}
                rowHeight={characterList.length >= 10 ? 400 : 550}
              >
                {characterList.map((character) => {
                  let characterEntry = character.character;
                  // console.log(characterEntry);

                  return (
                    <Grid
                      item
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        // width: "70%",
                        margin: "auto",
                        backgroundColor: "white",
                      }}
                    >
                      <Link
                        to='/character-profile'
                        state={{ characterId: characterEntry.mal_id }}
                      >
                        <ImageListItem>
                          <Box
                            component='img'
                            sx={{ width: "100%", height: "100%" }}
                            src={characterEntry.images.jpg.image_url}
                            alt={characterEntry.name}
                          />

                          <ImageListItemBar title={characterEntry.name} />
                        </ImageListItem>

                        {/* <Typography>{characterEntry.name} </Typography> */}
                      </Link>
                    </Grid>
                  );
                })}
              </ImageList>
            </Grid>
          </div>
        </Box>
      </Box>
    );
  } else {
    return <LoadingScreen />;
  }
}

export default AnimeCharacterListPage;
