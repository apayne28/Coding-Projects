import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoadingScreen from "../LoadingScreen";
import MangaInfoMangaDetails from "./MangaInfoMangaDetails";

function MangaInfoCharacters(props) {
  const [info, setInfo] = useState();
  const [mangaCharacterList, setMangaCharacterList] = useState();
  let navigate = useNavigate();

  const getMangaCharacters = useCallback(async (id) => {
    try {
      let mangaCharactersData = await fetch(
        `https://api.jikan.moe/v4/manga/${id}/characters`,
      ).then((res) => res.json());
      let mangaCharactersDataResults = mangaCharactersData.data;

      setMangaCharacterList(mangaCharactersDataResults);
    } catch (error) {
      console.log("Manga Character List not found");
    }
  }, []);

  useEffect(() => {
    if (!mangaCharacterList) {
      getMangaCharacters(props.mangaId);
    }
  }, [getMangaCharacters, mangaCharacterList, props.mangaId]);

  if (mangaCharacterList) {
    return (
      <div>
        <Link
          to='/manga-character-list-page'
          state={{ mangaId: props.mangaId }}
        >
          <Typography>View More</Typography>
        </Link>
        <div className='anime-info-character-list'>
          {mangaCharacterList.length > 0
            ? mangaCharacterList.slice(0, 5).map((character) => {
                let characterEntry = character.character;
                // console.log(characterEntry);

                return (
                  <Grid item>
                    <Link
                      to='/character-profile'
                      state={{ characterId: characterEntry.mal_id }}
                    >
                      <img
                        src={characterEntry.images.jpg.image_url}
                        alt={characterEntry.name}
                      />
                      <Typography>{characterEntry.name} </Typography>
                    </Link>
                  </Grid>
                );
              })
            : "N/A"}
        </div>
      </div>
    );
  } else {
    return <LoadingScreen />;
  }
}

export default MangaInfoCharacters;
