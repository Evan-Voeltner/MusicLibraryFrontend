const MusicTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {props.songEntries.map((entry, index) => {
          return (
            <tr>
              <td>{entry.title}</td>
              <td>{entry.artist}</td>
              <td>{entry.album}</td>
              <td>{entry.genre}</td>
              <td>{entry.release_date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MusicTable;