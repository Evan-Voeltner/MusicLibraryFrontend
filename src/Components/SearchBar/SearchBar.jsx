import React, { useState } from "react";

const SearchBar = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [release_date, setReleaseDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let songFilter = {
      title: title,
      artist: artist,
      album: album,
      genre: genre,
      release_date: release_date,
    };
    props.filterSongProperty(songFilter);
  }

  return (
    <div>
      <h3>Apply Filter</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label>Artist</label>
        <input
          type="text"
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
        <label>Album</label>
        <input
          type="text"
          value={album}
          onChange={(event) => setAlbum(event.target.value)}
        />
        <label>Genre</label>
        <input
          type="text"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        />
        <label>Release Date</label>
        <input
          type="date"
          value={release_date}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
        <button type="submit">Apply Filter</button>
      </form>
    </div>
  );
};

export default SearchBar;
