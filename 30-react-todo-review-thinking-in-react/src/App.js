import React from "react";
import "./App.css";
import { CATEGORIES } from "./data";
import CategoryFilters from "./components/CategoryFilters";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

class App extends React.Component {
  state = {
    selectedCategory: "All",
    tasks: [
      {
        text: "Buy rice",
        category: "Food"
      },
      {
        text: "Save a tenner",
        category: "Money"
      },
      {
        text: "Build a todo app",
        category: "Code"
      },
      {
        text: "Build todo API",
        category: "Code"
      },
      {
        text: "Get an ISA",
        category: "Money"
      },
      {
        text: "Cook rice",
        category: "Food"
      },
      {
        text: "Tidy house",
        category: "Misc"
      }
    ]
  };
  // { selectedCategory: "All" }
  setSelectedCategory = selectedCategory => {
    this.setState({
      selectedCategory
    });
  };

  addTask = newTask => {
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  filterTasks = (tasks, selectedCategory) =>
    selectedCategory === "All"
      ? tasks
      : tasks.filter(task => task.category === selectedCategory);

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilters
          categories={CATEGORIES}
          clickHandler={this.setSelectedCategory}
          selectedCategory={this.state.selectedCategory}
        />
        <div className="tasks">
          <h5>Tasks</h5>
          <TaskForm
            categories={CATEGORIES.filter(c => c !== "All")}
            addTask={this.addTask}
          />
          <TaskList
            tasks={this.filterTasks(
              this.state.tasks,
              this.state.selectedCategory
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
