const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// include routes files
const HomeRoute = require('./routes/home');
app.use('/',HomeRoute);









// starting server
app.listen(process.env.NODE_PORT, () =>{
    console.log(`Server is running on port : ${process.env.NODE_PORT}`);
})