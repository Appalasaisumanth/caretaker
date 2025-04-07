const express = require("express");
// const bodyParser = require('body-parser');
// const cors = require('cors'); 
const App = express();

// App.use(express.json());
// App.use(cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PATCH', 'DELETE'],
//   credentials: true,
// }));

// Routes
App.get('/', (req, res) => {
  res.status(200).json({ "message": "welcome to caretaker api" });
});



// App.use('*',(req,res)=>{res.status(400).json({message:"invalid request/route"})});


const PORT = process.env.PORT||5000;
App.listen(PORT, () => {
    console.log(`API started at http://localhost:${PORT}`);
});