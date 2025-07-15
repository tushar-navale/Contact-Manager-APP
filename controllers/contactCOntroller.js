const asyncHandler = require('express-async-handler'); // to handle errors in async functions
const Contact = require('../models/contactModel'); // import the contact model


//@desc get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = asyncHandler(async(req,res)=>{
    const contact = await Contact.find()
    res.status(200).json(contact);
});

//@desc create a new contact
//@route POST /api/contacts
//@access Public
const createContacts = asyncHandler(async(req,res)=>{  //async function to handle asynchronous operations for mongoDB
    console.log(" this is the request body",req.body); // req.body contains the data sent in the request
    const {name, gender, age} = req.body; // destructuring the request body

    if(!name || !gender || !age){
        res.status(400); // 400 Bad Request
        throw new Error("Please fill all the fields");
    }
    const contact = await Contact.create({name, gender, age})
    res.status(201).json(contact);
});

//@desc update a  contact
//@route PUT /api/contacts
//@access Public
const updateContacts = asyncHandler(async(req,res)=>{
    res.status(201).json({"message": "update a contact"});
});

//@desc get a contact
//@route GET /api/contacts/:id
//@access Public
const getContact = asyncHandler(async(req,res)=>{
    const contact  = await Contact.findById(req.params.id); // find the contact by id
    if(!contact){
        res.status(404); // 404 Not Found
        throw new Error(`Contact with id ${req.params.id} not found`); // if contact not found, throw an error
    }
    res.status(200).json(contact);
    res.status(200).json({"message": `get a contact ${req.params.id}` });
});

//@desc get a contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async(req,res)=>{
    
    const updatedcontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    res.status(201).json(updatedcontact);
    res.status(201).json({"message": `update a contact ${req.params.id}`});
});

//@desc get a contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async(req,res)=>{

    const contact = await Contact.findById(req.params.id); // find the contact by id
    if(!contact){
        res.status(404); // 404 Not Found
        throw new Error(`Contact with id ${req.params.id} not found`); // if contact not found, throw an error
    }
    await Contact.findByIdAndDelete(req.params.id); // delete the contact by id
    res.status(200).json("contact deleted",contact);
    //res.status(201).json({"message": `delete a contact ${req.params.id}`});
});

module.exports = {getContacts, createContacts, updateContacts, getContact, updateContact, deleteContact};