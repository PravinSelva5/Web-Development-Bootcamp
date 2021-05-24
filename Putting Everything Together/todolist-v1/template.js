// jshint esversion:6

// TEMPLATE FOR app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get("/", function(){
    console.log("Server stated on port 3000");
})



app.listen(3000, function(){
    console.log("Server started on port 3000");
})