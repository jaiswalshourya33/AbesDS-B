const express=require('express')
const app = express()
const port = 8080
app.get('/',(req,res)=>{
    res.send("this is my first server")
})

app.get('/about', (req, res) => {
    const students = [
        {
            "id": 1,
            "name": "Aarav Sharma",
            "age": 20,
            "course": "Computer Science",
            "grade": "A"
        },
        {
            "id": 2,
            "name": "Riya Patel",
            "age": 19,
            "course": "Information Technology",
            "grade": "B+"
        },
        {
            "id": 3,
            "name": "Aditya Verma",
            "age": 21,
            "course": "Mechanical Engineering",
            "grade": "A-"
        },
        {
            "id": 4,
            "name": "Sneha Gupta",
            "age": 20,
            "course": "Electrical Engineering",
            "grade": "B"
        },
        {
            "id": 5,
            "name": "Karan Singh",
            "age": 22,
            "course": "Civil Engineering",
            "grade": "A+"
        }
    ];

    res.json(students);  // send JSON response
});


app.listen(port,()=>{
    console.log(`server is running at:http://localhost:${port}`)
})
