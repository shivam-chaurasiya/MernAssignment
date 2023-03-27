require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const bodyparser = require('body-parser');
const router = require('./routes/userroutes')
const Router = require('./routes/bookroutes')
const app = express();



connectDB();

app.use(express.json({ extended: false }));

app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/user', router);

app.use('/book', Router);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});