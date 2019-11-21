import React from 'react'
import ExerciseForm from './ExerciseForm';
import Totaliser from './Totaliser';

const WorkoutForm = ({ name, exercises, updateName, updateExercise, deleteExercise, addExercise }) => {
    const total = exercises.reduce((t, e) => t + (e.weight * e.count), 0)

    return (
        <div className="workout-form">
            Name: <input type="text" name="name" onChange={updateName} value={name} />
            {
                exercises.map(exercise =>
                    <ExerciseForm 
                        key={exercise.id} 
                        {...exercise}
                        updateCount={event => updateExercise(exercise.id, 'count', event.target.value)}
                        updateWeight={event => updateExercise(exercise.id, 'weight', event.target.value)}
                        deleteExercise={() => deleteExercise(exercise.id)}
                    />)
            }
            <Totaliser total={total} />
            <button onClick={addExercise}>+ Add exercise</button>
        </div>
    )
}

export default WorkoutForm