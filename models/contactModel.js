const mongoose = require('mongoose');   

const contactSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Please add a name"],
    },
    gender:{
        type: String,
        required: [true, "Please add a gender"],
    },
    age:{
        type: Number,
        required: [true, "Please add an age"],
    },
},
{
    timestamps: true,  
});

module.exports = mongoose.model("Contact", contactSchema);