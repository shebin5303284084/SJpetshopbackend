const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db.connection");
const cors = require("cors");
const Router = require("./router");

const app = express();
//dummy
// Use CORS
app.use(cors());

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files from the upload directory
// app.use(express.static(`${__dirname}/upload`));

// Use the router
app.use("/", Router);

// Start the server
app.listen(2024, function() {
    console.log("The port is running at 2024");
});
