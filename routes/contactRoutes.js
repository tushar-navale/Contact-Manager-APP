const express = require('express');
const router = express.Router();
const { getContacts,createContacts, updateContacts, getContact,updateContact,deleteContact } = require('../controllers/contactCOntroller');


// router.route('/').get((req, res) => {
//     res.status(200).json({"message": "get all contacts"});
// });

router.route('/').get(getContacts).post(createContacts).put(updateContacts);

// router.route('/').post((req, res) => {
//     res.status(200).json({"message": "create a new contact"});
// });

//router.route('/').post(createContacts);

//router.route('/').put(updateContacts);

// router.route('/:id').get((req, res) => {
//     res.status(200).json({"message": `get contact with id ${req.params.id}`});
// });

router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

// router.route('/:id').put((req, res) => {
//     res.status(200).json({"message": `update contact with id ${req.params.id}`});
// });

//router.route('/:id').put(updateContact);


// router.route('/:id').delete((req, res) => {
//     res.status(200).json({"message": `delete contact with id ${req.params.id}`});
// });

//router.route('/:id').delete(deleteContact);


module.exports = router;