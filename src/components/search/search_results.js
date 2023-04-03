import React from "react";

import Tracklist from "../tracklist/tracklist";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="mt-28 p-4 rounded-lg overflow-y-scroll w-[90vw] md:w-1/2 mb-10 h-[50vh] bg-gradient-to-b from-indigo-600 to-violet-900  m-auto">
        <h2 className="text-white font-semibold text-2xl">Results</h2>
        <Tracklist tracks={this.props.searchResults} onAdd={this.props.addTrack} isRemoval={true}/>
      </div>
    );
  }
}

export default SearchResults;
