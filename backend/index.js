const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const admin_routes=require('./routes/admin');
const fdo_routes=require('./routes/fdo');
const deo_routes=require('./routes/deo');
const doctor_routes=require('./routes/doctor');
const patient_routes=require('./routes/patient');
const room_routes=require('./routes/room');
const appointment_routes=require('./routes/appointment');
const app = express();



app.use(cors());


app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.json({ message: "Welcome to caretaker application." });
});
const connection = require('./connection');

app.get('/connect', (req, res) => {
    connection.query("SHOW TABLES", (err, results) => {
        if (err) {
            console.error("Connection failed:", err);
            return res.status(500).json({ message: "Connection failed", error: err });
        }
        return res.json({ message: "Connection built successfully", tables: results });
    });
});
app.use('/admin',admin_routes)
app.use('/fdo',fdo_routes)
app.use('/deo',deo_routes)
app.use('/doctor',doctor_routes)
app.use('/patient',patient_routes)
app.use('/room',room_routes);
app.use('/appointment',appointment_routes);
// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});