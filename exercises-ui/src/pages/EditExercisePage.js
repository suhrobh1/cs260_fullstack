import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const EditExercisePage = () => {

    const [exercise, setExercise] = useState({
        name: "",
        reps: "",
        weight: "",
        unit: "",
        date: "",
      });

    // exercise inputs are being captured and stored
    const handleChange = (e) => {
        setExercise({...exercise, [e.target.name]: e.target.value});
      };
    
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercise(data)
    }



    return (
        <div>
        <h1>Add Exercise</h1>
        <input
            type="text"
            placeholder="Enter name here"
            name = "name"
            value={exercise.name}
            onChange={(e) => handleChange(e)}/>
        <input
            type="number"
            value={exercise.reps}
            placeholder="Enter reps here"
            name='reps'
            onChange={(e) => handleChange(e)} />
        <input
            type="number"
            placeholder="Enter weight here"
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
            placeholder="Enter date here"
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