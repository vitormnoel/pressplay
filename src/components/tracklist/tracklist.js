import React from "react";

import Track from "./track";

class Tracklist extends React.Component {
  render() {
    return (
      <div className="">
        {
          this.props.tracks.map((track) => {
            return <Track track={track} key={track.id} />;
          })
          // this.props.tracks.map(track => console.log(track))
        }
      </div>
    );
  }
}

export default Tracklist;
