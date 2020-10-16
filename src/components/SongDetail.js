import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  // Conditional checking in case the user has not selected a song yet.
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title}
        <br></br>
        Duration: {song.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  // keys of state object are from combinereducers function in reducers folder.
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);
