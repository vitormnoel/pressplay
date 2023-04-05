import React from "react";

import Track from "./track";

class Tracklist extends React.Component {
  
  render() {
    return (
      <div className="px-4">
        {
          this.props.tracks.map((track) => {
            return <Track track={track} key={track.id} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>;
          })
          // this.props.tracks.map(track => console.log(track))
        }
      </div>
    );
  }
}

export default Tracklist;
