import React from "react";

import Playlist from "../components/playlist/playlist";
// import ProfileImage from "../components/profile/image";
import SearchBar from "../components/search/search_bar";
import SearchResults from "../components/search/search_results";
import Spotify from "../components/util/spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "My Playlist",
      playlistTracks: [],
      img: "",
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.profile = this.profile.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (
      this.state.playlistTracks.find((savedTrack) => savedTrack.id === track.id)
    ) {
      return;
    } else {
      this.state.playlistTracks.push(track);
      this.setState({ playlistTracks: tracks });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter((currentTrack) => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: "New Playlist",
        playlistTracks: [],
      });
    });
  }

  search(term) {
    Spotify.searchRecommendation(term).then((searchResults) => {
      this.setState({ searchResults: searchResults });
    });
  }

  profile(){
    Spotify.profile().then((img) => {
      this.setState({img: img})
    })
  }

  render() {
    return (
      <div className="bg-gradient-to-t from-blue-900 to-violet-700 pb-10">
        <h1 className="text-3xl font-bold text-white  text-center p-5">
          Press<span className="text-violet-400">Play</span>
        </h1>
        <div>
          <SearchBar onSearch={this.search} />
          {/* <ProfileImage onLoad={this.profile}/> */}
          <div className="lg:flex container m-auto">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
        <p className="text-slate-200 text-base text-center font-normal">&copy; 2023 - (vitormnoel);</p>
      </div>
    );
  }
}

export default App;
