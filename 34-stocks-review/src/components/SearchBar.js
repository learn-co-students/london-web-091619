import React from 'react';

const SearchBar = ({sortTypes, handleFilterChange, filterTypes, handleSortChange, currentSortType}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      {
        sortTypes.map(type =>
          <label>
            <input 
            type="radio" 
            value={type}
            checked={currentSortType === type} 
            onChange={(e) => handleSortChange(e.target.value)}/>
            {type}
          </label>
          )
      }
      
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => handleFilterChange(e.target.value)}>
          {
            filterTypes.map(type => <option value={type}>{type}</option>)
          }
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
