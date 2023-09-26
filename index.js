const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/dbConnect");
const {notFound, errorHandler} = require("./helpers/errorHandler");
const cors = require("cors");

app.use(cors());
dbConnect();

// Configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.use('/api/authors', require('./src/routes/authorRoutes'));
app.use('/api/books', require('./src/routes/bookRoutes'));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})