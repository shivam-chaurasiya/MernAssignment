const express = require("express");
const {RegisterUser} =require('../controllers/User/Register')
const {LoginUser} = require('../controllers/User/Login')

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);

module.exports = router;