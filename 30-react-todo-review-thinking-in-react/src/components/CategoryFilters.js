import React from "react";

class CategoryFilters extends React.Component {
  render() {
    return (
      <div className="categories">
        <h5>Category filters</h5>
        {this.props.categories.map(category => (
          <button
            key={category}
            className={
              this.props.selectedCategory === category ? "selected" : undefined
            }
            onClick={() => this.props.clickHandler(category)}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
}

export default CategoryFilters;
