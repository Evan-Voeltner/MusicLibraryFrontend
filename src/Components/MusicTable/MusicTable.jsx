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
        {props.songEntries
          .filter((song) => {
            if (
              props.songFilter.title === "" &&
              props.songFilter.artist === "" &&
              props.songFilter.album === "" &&
              props.songFilter.genre === "" &&
              props.songFilter.release_date === ""
            ) {
              return true;
            } else {
              if (
                song.title === props.songFilter.title ||
                song.artist === props.songFilter.artist ||
                song.album === props.songFilter.album ||
                song.genre === props.songFilter.genre ||
                song.release_date === props.songFilter.release_date
              ) {
                return true;
              } else {
                return false;
              }
            }
          })
          .map((entry) => {
            return (
              <tr>
                <td>{entry.title}</td>
                <td>{entry.artist}</td>
                <td>{entry.album}</td>
                <td>{entry.genre}</td>
                <td>{entry.release_date}</td>
                <button onClick={props.deleteSongProperty.bind(this, entry.id)}>
                  Delete Song
                </button>
                <button>Edit Song</button>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default MusicTable;
