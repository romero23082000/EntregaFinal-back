// const express = require('express');
// const person_routes = express.Router();
// const user_schema = require('../models/user.model')

// person_routes.post('/person', (req, res, next) => {
//     const new_person = new user_schema(req.body);
//     new_person.save()
//         .then((data) => {
//             res.json(data);

//         }).catch((err) => {
//             res.json({ message: err })
//         })
// })
// person_routes.get('/person', (req, res, next) => {
//     user_schema
//         .find()
//         .then((data) => res.json(data))
//         .catch((err) => res.json({ message: err }))
// })
// person_routes.get('/person/:id', (req, res, next) => {
//     const { id } = req.params
//     user_schema.
//         findById(id)
//         .then((data) => res.json(data))
//         .catch((err) => res.json({ message: err }))

// })
// person_routes.put('/person/:id', (req, res, next) => {
//     const { id } = req.params
//     const { name, lastname, email, contact, proffession } = req.body
//     user_schema.
//         updateOne({ _id: id }, { $set: { name, lastname, email, contact, proffession } })
//         .then((data) => res.json(data))
//         .catch((err) => res.json({ message: err }))
// })
// person_routes.delete('/person/:id', (req, res, next) => {
//     const { id } = req.params
//     user_schema.
//         deleteOne({ _id: id })
//         .then((data) => res.json(data))
//         .catch((err) => res.json({ message: err }))
// })

// module.exports = person_routes;

