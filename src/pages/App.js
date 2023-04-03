import React from "react";

import Playlist from "../components/playlist/playlist";
import SearchBar from "../components/search/search_bar";
import SearchResults from "../components/search/search_results";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: "name", artist: "artist", album: "album", id: 0 },
        { name: "name1", artist: "artist1", album: "album1", id: 1 },
        { name: "name2", artist: "artist2", album: "album2", id: 2 },
      ],
      playlistName: "My Playlist",
      playlistTracks: [
        { name: "first", artist: "first artist", album: "first album", id: 0 },
        {
          name: "second",
          artist: "second artist",
          album: "second album",
          id: 1,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    } else {
      this.state.playlistTracks.push(track);
    }
  }

  render() {
    return (
      <div>
        <h1 className="text-2xl font-bold text-white bg-purple-dark text-center p-5">
          Ja<span className="text-purple-500">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack({ name: "name3", artist: "artist3", album: "album3", id: 3 },)} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
