const express = require("express");
const {CreateBook,
     Getbook , 
     updatebook, 
     deletebook} = require('../controllers/Books/bookcontroller')

const Router = express.Router();

Router.post("/create", CreateBook);

Router.get("/info/:id", Getbook);

Router.get('/info', Getbook);

Router.put('/update/:id', updatebook);

Router.delete('/delete/:id',deletebook);

module.exports = Router;