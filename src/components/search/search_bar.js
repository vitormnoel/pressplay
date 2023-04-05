import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div className="flex flex-col items-center mt-10">
        <input
          className="bg-white text-start p-4 rounded-lg w-1/2 md:w-1/4"
          placeholder="enter a song, album, or artist..."
          onChange={this.handleTermChange}
        />
        <button
          onClick={this.search}
          className="bg-violet-600 text-white font-bold py-2 px-8 rounded-full mt-5 hover:bg-indigo-900 shadow-lg duration-300"
        >
          search
        </button>
      </div>
    );
  }
}

export default SearchBar;
