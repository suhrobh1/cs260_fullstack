import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';

function HomePage() {
    const [exercises, setExercises] = useState([]);

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data)
    }

    useEffect(() => {
        loadExercises();
    }, []);


    
    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newExercises = exercises.filter(e => e._id !== _id);
            setExercises(newExercises);
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    }



    return (
        <>
            <div className='main'>
            <Navigation />
            <h2>List of Exercises</h2>
            <ExerciseList exercises={exercises} onDelete = {onDelete}> </ExerciseList>
            </div>
        </>
    );
}

export default HomePage;