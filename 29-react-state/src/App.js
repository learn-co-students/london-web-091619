import React, { Component } from "react";
import "./App.css";
import artworks from "./artworks";

import PaintingList from "./components/PaintingList";
import SortAndFilterOptions from "./components/SortAndFilterOptions";

export const SORT_TYPES = {
  DEFAULT: "Default",
  VOTES: "Votes"
};

class App extends Component {
  state = {
    searchTerm: "",
    voteFilter: false,
    sortMethod: SORT_TYPES.DEFAULT,
    paintings: artworks
  };

  toggleVoteFilter = () => {
    this.setState({
      voteFilter: !this.state.voteFilter
    });
  };

  handleSearchChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  // NOT EVENT!!! IT'S ONLY THE SORT METHOD VALUE!!!
  // look in sortandfilteroptions for HOW
  handleSortMethodChange = newSortMethod => {
    this.setState({
      sortMethod: newSortMethod
    });
  };

  sortPaintings = (paintings, sortMethod) => {
    if (sortMethod === SORT_TYPES.DEFAULT) return paintings;

    if (sortMethod === SORT_TYPES.VOTES)
      return paintings.sort((a, b) => b.votes - a.votes);
  };

  filterPaintingsByVotes = (paintings, voteFilter) => {
    if (voteFilter) return paintings.filter(painting => painting.votes < 20);
    else return paintings;
  };

  filterByTitle = (paintings, searchTerm) => {
    return paintings.filter(painting =>
      painting.title
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );
  };

  render() {
    const filteredByVotes = this.filterPaintingsByVotes(
      this.state.paintings,
      this.state.voteFilter
    );
    const filteredByTitle = this.filterByTitle(
      filteredByVotes,
      this.state.searchTerm
    );

    const sortedPaintings = this.sortPaintings(
      filteredByTitle,
      this.state.sortMethod
    );

    return (
      <div className="App">
        <h2>
          {this.props.title} size: {this.props.size}
        </h2>
        <SortAndFilterOptions
          voteFilter={this.state.voteFilter}
          handleVoteFilterChange={this.toggleVoteFilter}
          searchTerm={this.state.searchTerm}
          handleSearchChange={this.handleSearchChange}
          sortMethod={this.state.sortMethod}
          handleSortMethodChange={this.handleSortMethodChange}
        />
        <PaintingList paintings={sortedPaintings} />
      </div>
    );
  }
}

export default App;
