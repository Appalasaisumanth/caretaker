const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

const app = express();



app.use(cors());

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
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


// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});