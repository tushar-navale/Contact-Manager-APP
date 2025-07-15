const mongoose = require('mongoose');

const connectDB = async () => {

    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`MongoDB connected: ${connect.connection.host, connect.connection.name}`); // Log the host of the connected database
    }
    catch(err){
        console.error("Error connecting to the database", err);
        process.exit(1); // Exit the process with failure

    }
}

module.exports = connectDB; 