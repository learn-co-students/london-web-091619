import React from 'react'

const ExerciseForm = ({ weight, count, updateWeight, updateCount, deleteExercise }) => {
    return (
        <div className="exercise-form">
            Weight: <input type="number" name="weight" value={weight} onChange={updateWeight} />
            Count: <input type="number" name="count" value={count} onChange={updateCount} />
            <button onClick={deleteExercise}>X</button>
        </div>
    )
}

export default ExerciseForm