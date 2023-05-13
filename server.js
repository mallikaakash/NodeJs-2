const express = require('express');
const dotenv = require('dotenv').config();
const port=process.env.PORT || 5000;
const {errorHandler}=require('./backend/middleware/errorMiddleware')
const app= express();
const colors = require('colors')
const connectDB = require('./backend/config/db');

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(errorHandler);
app.use('/api/goals', require('./backend/routes/goalRoutes.js'));
app.use('/api/users', require('./backend/routes/userRoutes.js'));
app.listen(port, ()=> {
    console.log(`Server listening on port ${port}...`)
})