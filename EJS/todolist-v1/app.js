// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('view engine', 'ejs');

app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today;

    if (currentDay === 6 || currentDay === 0){
        res.send("<h1>Yay it's the weekend!</h1>")
    } else {
        res.sendFile(__dirname + "/index.html");
    }
})

// You can use res.write() if you need to send more than one HTML tags.
// Once you write all your res.write(), you can end it with res.send()

app.listen(3000, function(){
    console.log("Server started on port 3000");
})