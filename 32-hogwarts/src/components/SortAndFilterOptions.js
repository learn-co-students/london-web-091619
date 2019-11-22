import React from "react";
import { SORT_OPTIONS } from "../config";

const SortAndFilterOptions = ({
  greasedFilter,
  toggleGreasedFilter,
  sortOption,
  setSortOption
}) => {
  return (
    <div>
      <button
        className={`ui button ${greasedFilter ? "primary" : ""}`}
        onClick={toggleGreasedFilter}
      >
        Show greased only
      </button>
      <div className="ui buttons">
        {/* {
              Object.values(SORT_OPTIONS).map()
          }
          {
              ["Default", "Name", 'Weight']
          } */}
        <button
          className={`ui button ${
            sortOption === SORT_OPTIONS.DEFAULT ? "primary" : ""
          }`}
          onClick={() => setSortOption(SORT_OPTIONS.DEFAULT)}
        >
          Default
        </button>
        <div className="or"></div>
        <button
          className={`ui button ${
            sortOption === SORT_OPTIONS.NAME ? "primary" : ""
          }`}
          onClick={() => setSortOption(SORT_OPTIONS.NAME)}
        >
          Name
        </button>
        <div className="or"></div>
        <button
          className={`ui button ${
            sortOption === SORT_OPTIONS.WEIGHT ? "primary" : ""
          }`}
          onClick={() => setSortOption(SORT_OPTIONS.WEIGHT)}
        >
          Weight
        </button>
      </div>
    </div>
  );
};

export default SortAndFilterOptions;
