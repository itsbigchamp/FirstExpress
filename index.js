// import express library
import express, { response } from 'express';

// initialize express server
const app = express()
app.use(express.json())
// add new student (in theory)
app.post('/students', (req, res) => { 
    const newStudent = req.body;
    console.log("newStudent",newStudent)
    students.push(newStudent);  
    res.status(201).send(students);
})

// list requests that we want express to respond to
app.get('/hello', (req, res) => {
    // do something...
    res.send('Hello World!');
});

const students = [
    { firstName : 'Jonathan', lastName: 'Vegas'},
    { firstName : 'Bridgette', lastName: 'Lemus'},
    { firstName : 'Mason', lastName: 'Madaras'},
    { firstName : 'Logan', lastName: 'McCalley'},
];

app.get('/students', (req, res) => {
    res.send(students);
});
// /students/Mason
app.get('/students/:firstName',(req, res) => {
    const student = students.find(stud => stud.firstName === req.params.firstName)
    if(!student) {
        res.status(404).send({message: 'Student not found', success: false});
        return;
    }
    res.send(student)
});

// start listening on a port
app.listen(3001, () => {
    console.log('Now listening on port 3001')
})
