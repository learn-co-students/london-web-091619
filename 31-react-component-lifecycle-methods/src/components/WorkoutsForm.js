import React from "react";
import WorkoutForm from "./WorkoutForm";
import Totaliser from "./Totaliser";

const emptyExercise = () => ({ id: Math.random(), weight: "", count: "" });

const emptyWorkout = () => ({
  id: Math.random(),
  name: "",
  exercises: [{ ...emptyExercise() }]
});

class WorkoutsForm extends React.Component {
  state = {
    workouts: [{ ...emptyWorkout() }]
  };

  submit = event => {
    event.preventDefault();
    this.props.submitWorkouts(this.state.workouts);
    this.setState({
      workouts: [{ ...emptyWorkout() }]
    });
  };

  addExercise = workoutId =>
    this.setState({
      workouts: this.state.workouts.map(workout => {
        if (workout.id !== workoutId) return workout;

        workout.exercises = [...workout.exercises, { ...emptyExercise() }];

        return workout;
      })
    });

  addWorkout = () =>
    this.setState({
      workouts: [...this.state.workouts, emptyWorkout()]
    });

  updateWorkout = (workoutId, key, value, exerciseId) =>
    this.setState({
      workouts: this.state.workouts.map(workout => {
        if (workout.id !== workoutId) return workout;

        if (exerciseId) {
          workout.exercises = workout.exercises.map(exercise => {
            if (exercise.id !== exerciseId) return exercise;

            exercise[key] = value;

            return exercise;
          });

          return workout;
        }

        workout[key] = value;

        return workout;
      })
    });

  deleteExercise = (exerciseId, workoutId) =>
    this.setState({
      workouts: this.state.workouts.map(workout => {
        if (workout.id !== workoutId) return workout;

        workout.exercises = workout.exercises.filter(
          exercise => exercise.id !== exerciseId
        );

        return workout;
      })
    });

  getTotal = () =>
    this.state.workouts.reduce((total, workout) => {
      return (
        total +
        workout.exercises.reduce(
          (exTotal, exercise) => exTotal + exercise.weight * exercise.count,
          0
        )
      );
    }, 0);
  render() {
    console.log("forms render");
    const { workouts } = this.state;
    return (
      <div>
        <h1>Create workouts</h1>
        {workouts.map(workout => (
          <WorkoutForm
            {...workout}
            key={workout.id}
            updateName={event =>
              this.updateWorkout(
                workout.id,
                event.target.name,
                event.target.value
              )
            }
            updateExercise={(exerciseId, key, value) =>
              this.updateWorkout(workout.id, key, value, exerciseId)
            }
            deleteExercise={exerciseId =>
              this.deleteExercise(exerciseId, workout.id)
            }
            addExercise={() => this.addExercise(workout.id)}
          />
        ))}
        <button onClick={this.addWorkout}>+ Add workout</button>
        <Totaliser total={this.getTotal()} />
        <button onClick={this.submit}>Create workouts</button>
      </div>
    );
  }
}

export default WorkoutsForm;
