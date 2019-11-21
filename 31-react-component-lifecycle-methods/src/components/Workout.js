import React from "react";

const Workout = ({ name, exercises, deleteWorkout }) => {
  return (
    <div className="workout">
      <button onClick={deleteWorkout}>X</button>
      <h3>{name}</h3>
      {exercises.map(exercise => (
        <div key={exercise.id}>
          <span>
            Weight: {exercise.weight}kg, Lifts: {exercise.count}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Workout;
