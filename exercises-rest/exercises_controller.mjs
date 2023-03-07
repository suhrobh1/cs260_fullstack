import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercises from './exercises_model.mjs';

const app = express();

app.use(express.json());

const PORT = process.env.PORT;



// Posting entry to database
app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});


// Returns workout by id
app.get('/exercises/:_id', (req, res) => {
    console.log(req.params._id)
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)
        .then(exercise => { 
            if (exercise !== null) {
                res.json(exercise);
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }         
         })
        .catch(error => {
            res.status(400).json({ Error: 'Request failed At Find One' });
        });

});


// returns all workouts in database
app.get('/exercises', (req, res) => {
    let filter = {};
    // Is there a query parameter named year? If so add a filter based on its value.
  
    exercises.findExercises(filter, '', 0)
        .then(exercises => {
            res.send(exercises);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request failed' });
        });

});


//Filter based GET 
app.get('/exercises', (req, res) => {
    let filter = {};
    // Is there a query parameter named year? If so add a filter based on its value.

    if (req.query._id != null){
        filter = {req: req.query._id};
    }
    
    exercises.findExercises(filter, '', 0)
        .then(exercises => {
            res.send(exercises);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request failed' });
        });

});
// updating entry by id
app.put('/exercises/:_id', (req, res) => {
    exercises.updateExercise(req.params._id, req.body)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, name: req.body.name, weight: req.body.weight, unit: req.body.unit, reps: req.body.reps, date: req.body.date })
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

// deleting by id
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});