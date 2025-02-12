import ItemList from "./ItemList";
import React from "react";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* Item list de artistas */}
      <ItemList
        title="Artistas"
        items={10}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />

      {/* Item list de musicas */}
      <ItemList
        title="Músicas"
        items={20}
        itemsArray={songsArray}
        path="/musics"
      />
    </div>
  );
};

export default Main;
