import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import SongSubmit from "./Components/SongSubmit/SongSubmit";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [songs, setSongs] = useState([]);

  // {
  //   title: "Sad Machine",
  //   artist: "Porter Robinson",
  //   album: "Worlds",
  //   genre: "EDM",
  //   release_date: "8-23-2014",
  // }

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
  }

  async function addNewSong(song) {
    let response = await axios.post('http://127.0.0.1:8000/api/music/', song);
    if(response.status === 201){
      await getAllSongs();
    }
  }

  return (
    <div>
      <MusicTable songEntries={songs} />
      <SongSubmit addNewSongProperty={addNewSong} />
      <SearchBar />
    </div>
  );
}

export default App;
