import React from "react";
import { SORT_TYPES } from "../App";

class SortAndFilterOptions extends React.Component {
  handleChange = e => {
    //   e.persist()
    // console.log(e.target);
    // fetch()
    //     .then(() => {
    //         e.target
    //     })
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search title..."
          value={this.props.searchTerm}
          onChange={this.props.handleSearchChange}
        />
        <label>
          <input
            type="checkbox"
            id="votes-filter"
            checked={this.props.voteFilter}
            onChange={this.props.handleVoteFilterChange}
          />
          unpopular?
        </label>
        <label>
          <input
            type="radio"
            checked={this.props.sortMethod === SORT_TYPES.DEFAULT}
            // creating an inline anonymous function to pass the sort type, not the event
            onChange={() =>
              this.props.handleSortMethodChange(SORT_TYPES.DEFAULT)
            }
          />
          {SORT_TYPES.DEFAULT}
        </label>
        <label>
          <input
            type="radio"
            checked={this.props.sortMethod === SORT_TYPES.VOTES}
            // creating an inline anonymous function to pass the sort type, not the event
            onChange={() => this.props.handleSortMethodChange(SORT_TYPES.VOTES)}
          />
          {SORT_TYPES.VOTES}
        </label>
      </form>
    );
  }
}

export default SortAndFilterOptions;
