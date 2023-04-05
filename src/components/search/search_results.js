import React from "react";

import Tracklist from "../tracklist/tracklist";

class SearchResults extends React.Component {
  render() {
    return (
      <div className="mt-28 pb-8 rounded-lg overflow-y-scroll w-[90vw] md:w-1/2 lg:w-1/3 mb-10 h-[60vh] bg-gradient-to-t from-indigo-900 to-blue-900 m-auto">
        <h2 className="p-4 text-white font-semibold text-2xl sticky top-0 bg-blue-900/80">Results</h2>
        <Tracklist tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={false}/>
      </div>
    );
  }
}

export default SearchResults;
