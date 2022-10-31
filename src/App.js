import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import SongSubmit from "./Components/SongSubmit/SongSubmit";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [songs, setSongs] = useState([]);
  const [songFilter, setSongFilter] = useState([]);

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

  async function deleteSong(songPK) {
    console.log(songPK);
    let response = await axios.delete(`http://127.0.0.1:8000/api/music/${songPK}/`);
    if(response.status === 204){
      await getAllSongs();
    }
  }

  function filterSong(song){
    setSongFilter(song)
    console.log(song)
  }

  return (
    <div>
      <SearchBar filterSongProperty={filterSong}/>
      <MusicTable songEntries={songs} deleteSongProperty={deleteSong} songFilter={songFilter}/>
      <SongSubmit addNewSongProperty={addNewSong} />
    </div>
  );
}

export default App;
