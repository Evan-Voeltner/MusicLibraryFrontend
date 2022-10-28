import React, { useState } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';

function App() {

  const [songs, setSongs] = useState([{title: 'Sad Machine', artist: 'Porter Robinson', album: 'Worlds', genre: 'EDM', release_date: '8-23-2014'}])

  return (
    <div>
      <MusicTable songEntries={songs} />
    </div>
  );
}

export default App;
