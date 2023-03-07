import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditExercisePage = ({exerciseToEdit}) => {

    const [editedExercise, setEditedExercise] = useState({
        name: exerciseToEdit.name,
        reps: exerciseToEdit.reps,
        weight: exerciseToEdit.weight,
        unit: exerciseToEdit.unit,
        date: exerciseToEdit.date,
      });

    // exercise inputs are being captured and stored
    const handleChange = (e) => {
        setEditedExercise({...editedExercise, [e.target.name]: e.target.value});
      };
    
  

    const addExercise = async () => {
        // const newExercise = { title, year, language };
        const response = await fetch(`/exercise/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the exercise!");
            navigate('/')
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
    };


    return (
        <div>
        <h1>Edit Exercise</h1>
        <input
            type="text"
            name = "name"
            value={exercise.name}
            onChange={(e) => handleChange(e)}/>
        <input
            type="number"
            value={exercise.reps}
            name='reps'
            onChange={(e) => handleChange(e)} />
        <input
            type="number"
            name='weight'
            value={exercise.weight}
            onChange={(e) => handleChange(e)}/>
         <select
          value={exercise.unit}
          onChange={(e) => handleChange(e)}
          name="unit"
        >
          <option value="none" defaultValue hidden>
            units
          </option>
          <option value="kg">kg</option>
          <option value="lbs">lbs</option>
        </select>
         <input
            type="date"
            name='date'
            value={exercise.date}
            onChange={(e) => handleChange(e)} />
        <button
            onClick={addExercise}
        >Add</button>
    </div>
    );
}

export default EditExercisePage;