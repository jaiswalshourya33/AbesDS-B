const express = require ("express");
const app = express();
const port = 8000;

app.get('/',(req,res)=>{
    res.send("this is the first server");
})
app.get('/about',(req,res)=>{
    res.send("this is the about page")
})

app.listen(port,()=>{
    console.log(`server is running at: http://localhost:${port}`)
})