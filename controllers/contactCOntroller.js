//@desc get all contacts
//@route GET /api/contacts
//@access Public
const getContacts = (req,res)=>{
    res.status(200).json({"message": "get all contacts"});
};

//@desc create a new contact
//@route POST /api/contacts
//@access Public
const createContacts = async(req,res)=>{  //async function to handle asynchronous operations for mongoDB 
    console.log(" this is the request body",req.body); // req.body contains the data sent in the request
    const {name, gender, age} = req.body; // destructuring the request body

    if(!name || !gender || !age){
        res.status(400); // 400 Bad Request
        throw new Error("Please fill all the fields");
    }
    res.status(201).json({"message": "create a new contact"});
};

//@desc update a  contact
//@route PUT /api/contacts
//@access Public
const updateContacts = async(req,res)=>{
    res.status(201).json({"message": "update a contact"});
};

//@desc get a contact
//@route GET /api/contacts/:id
//@access Public
const getContact = async(req,res)=>{
    res.status(201).json({"message": `get a contact ${req.params.id}`});
};

//@desc get a contact
//@route PUT /api/contacts/:id
//@access Public
const updateContact = async(req,res)=>{
    res.status(201).json({"message": `update a contact ${req.params.id}`});
};

//@desc get a contact
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = async(req,res)=>{
    res.status(201).json({"message": `delete a contact ${req.params.id}`});
};

module.exports = {getContacts, createContacts, updateContacts, getContact, updateContact, deleteContact};