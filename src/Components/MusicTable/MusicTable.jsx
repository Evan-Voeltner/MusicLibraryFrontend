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
              var filterMatches = true;
              for (const [key, value] of Object.entries(props.songFilter)) {
                if (value === "") {
                  console.log(key, value);
                  continue;
                } else if (song[key] === props.songFilter[key]) {
                  continue;
                } else {
                  filterMatches = false;
                }
              }
              if (filterMatches) {
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
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default MusicTable;
