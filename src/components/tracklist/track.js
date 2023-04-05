import React from "react";

class Track extends React.Component {

  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if(this.props.isRemoval) {
      return <button onClick={this.removeTrack} className="hover:text-slate-400 duration-300">-</button>
    }else {
      return <button onClick={this.addTrack} className="hover:text-slate-400 duration-300">+</button>
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track)
  }

  removeTrack() {
    this.props.onRemove(this.props.track)
  }

  render() {
    return (
      <div className="pt-1 flex items-center border-b-[.01rem] my-2 text-white">
        <div className="w-5/6">
          <h3 className="font-semibold capitalize">{this.props.track.name}</h3>
          <p className="text-slate-200 capitalize">{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <div className="w-1/6 flex justify-end">
        {this.renderAction()}
        </div>
      </div>
    );
  }
}

export default Track;