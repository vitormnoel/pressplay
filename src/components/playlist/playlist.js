import React from "react";

import Tracklist from "../tracklist/tracklist";

class Playlist extends React.Component {

  constructor(props){
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
    
  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="text-white flex flex-col mt-28 px-4 pb-8 rounded-lg overflow-y-scroll w-[90vw] md:w-1/2 h-[60vh] bg-gradient-to-b from-indigo-900 to-blue-800 m-auto">
        <input
          defaultValue={this.props.playlistName}
          onChange={this.handleNameChange}
          className="bg-indigo-900 border-b-2 font-semibold text-2xl sticky top-0 mb-2 pt-3 focus:ring-0 focus:outline-none "
        />
        <Tracklist tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/> 
        <div className="flex justify-center mt-10">
          <button
            onClick={this.props.onSave}
            className="border-2 hover:text-white hover:border-violet-600 hover:bg-violet-600 md:w-1/3 w-2/3 py-2 rounded-full font-semibold duration-300"
          >
            save on spotify
          </button>
        </div>
      </div>
    );
  }
}

export default Playlist;
