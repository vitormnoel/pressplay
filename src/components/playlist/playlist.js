import React from "react";

import Tracklist from "../tracklist/tracklist";

function Click() {}

class Playlist extends React.Component {
  render() {
    return (
      <div className="text-white flex flex-col mt-28 p-4 rounded-lg overflow-y-scroll w-[90vw] md:w-1/2 mb-10 h-[50vh] bg-gradient-to-b from-indigo-900 to-violet-700  m-auto">
        <input
          defaultValue={this.props.playlistName}
          className="border-b-2 capitalize font-semibold text-xl bg-transparent mb-4 focus:ring-0 focus:outline-none"
        />
        <Tracklist tracks={this.props.playlistTracks}/> 
        <div className="flex justify-center mt-10">
          <button
            onChange={Click()}
            className="uppercase bg-purple-dark hover:bg-purple-dark/50 md:w-1/3 w-2/3 py-2 rounded-full font-semibold duration-300"
          >
            save to spotify
          </button>
        </div>
      </div>
    );
  }
}

export default Playlist;
