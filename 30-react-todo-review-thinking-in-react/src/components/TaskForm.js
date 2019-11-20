import React from "react";

class TaskForm extends React.Component {
  state = {
    category: "Code",
    text: ""
  };

  handleTextChange = text => {
    this.setState({
      text
    });
  };

  handleCategoryChange = category => {
    this.setState({
      category
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state);
    this.setState({
      text: "",
      category: "Code"
    });
  };

  render() {
    return (
      <form className="new-task-form" onSubmit={this.handleSubmit}>
        <input
          name="text"
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange}
          onChange={e => this.handleTextChange(e.target.value)}
          onChange={this.handleChange}
        />
        <select
          name="category"
          value={this.state.category}
          onChange={e => this.handleCategoryChange(e.target.value)}
          onChange={this.handleChange}
        >
          {this.props.categories.map(category => (
            <option value={category}>{category}</option>
          ))}
        </select>
        <input type="submit" />
      </form>
    );
  }
}

export default TaskForm;
