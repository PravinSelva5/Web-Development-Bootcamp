// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today;

    if (currentDay === 6 || currentDay === 0){
        res.send("<h1>Yay it's the weekend!</h1>")
    } else {
        res.sendFile(__dirname + "/index.html");
    }
})

// you can use res.write() if you need to send more than one HTML tags. once you write all your res.write(), you can end it with res.send()

app.listen(3000, function(){
    console.log("Server started on port 3000");
})