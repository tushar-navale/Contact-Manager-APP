const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const dontenv = require('dotenv').config();
const port = process.env.PORT || 3000
const connectDB = require('./config/dbConnection'); 

connectDB(); // connect to the database
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.use(express.json()); // middleware to parse JSON bodies, recv client data from the server side
app.use("/api/contacts", require("./routes/contactRoutes"));
//app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/users", require("./routes/userRoutes")); // user routes for authentication and user management
app.use(errorHandler)
//app.use("/:id", require("./routes/contactRoutes"));