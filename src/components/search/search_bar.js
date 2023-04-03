import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center mt-36">
        <input
          className="bg-slate-100 text-start p-4 rounded-lg w-1/2 md:w-1/4"
          placeholder="enter a song, album, or artist..."
        />
        <button className="bg-purple-dark text-white font-bold py-2 px-8 rounded-full mt-5 hover:bg-indigo-900 duration-300">
          search
        </button>
      </div>
    );
  }
}

export default SearchBar;
