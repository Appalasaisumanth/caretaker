const express = require("express");
const App = express();
const {createPool} = require("mysql");

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "caretaker",
})

pool.query(`show tables`,(err,res,fields)=>{
    if(err) throw err
    console.log(res)
    console.log(fields)
})
// Routes
App.get('/', (req, res) => {
  res.status(200).json({ "message": "welcome to caretaker api" });
});



// App.use('*',(req,res)=>{res.status(400).json({message:"invalid request/route"})});


const PORT = process.env.PORT||5000;
App.listen(PORT, () => {
    console.log(`API started at http://localhost:${PORT}`);
});