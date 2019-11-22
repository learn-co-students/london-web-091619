import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import API from "./adapters/API";
import HogList from "./components/HogList";
import SortAndFilterOptions from "./components/SortAndFilterOptions";
import { SORT_OPTIONS } from "./config";

class App extends Component {
  state = {
    greasedFilter: false,
    sortOption: SORT_OPTIONS.DEFAULT,
    hogs: []
  };
  componentDidMount() {
    API.getHogs().then(hogs => this.setState({ hogs }));
  }

  // renderHogs() => {
  //   if (this.state.jhogs) {
  //       return this.state.hogs.map()
  //   } else {
  //     return []
  //   }
  // }

  toggleGreasedFilter = () => {
    this.setState({
      greasedFilter: !this.state.greasedFilter
    });
  };

  filterHogs = (hogs, greasedFilter) =>
    hogs.filter(hog => (greasedFilter ? hog.greased : true));

  sortHogs = (hogs, sortOption) => {
    if (sortOption === SORT_OPTIONS.DEFAULT) return hogs;
    if (sortOption === SORT_OPTIONS.NAME)
      return hogs.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name));
    if (sortOption === SORT_OPTIONS.WEIGHT)
      return hogs.sort((hogA, hogB) => hogB.weight - hogA.weight);
  };

  setSortOption = sortOption =>
    this.setState({
      sortOption
    });

  render() {
    // if (this.state.jhogs) {
    //   const hogs = this.state.hogs.map()
    // } else {
    //   hogs
    // }
    const { hogs, greasedFilter, sortOption } = this.state;
    const filteredHogs = this.filterHogs(hogs, greasedFilter);
    const sortedHogs = this.sortHogs(filteredHogs, sortOption);
    return (
      <div className="App">
        <Nav />
        <SortAndFilterOptions
          greasedFilter={greasedFilter}
          toggleGreasedFilter={this.toggleGreasedFilter}
          sortOption={sortOption}
          setSortOption={this.setSortOption}
        />
        <HogList hogs={filteredHogs} />
      </div>
    );
  }
}

export default App;
