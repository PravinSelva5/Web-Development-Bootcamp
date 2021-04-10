//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require('https');


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname  + "/signup.html");
})

app.post('/', function(req, res){
    
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    app.post("/failure", function(req, res){
        res.redirect("/");
    });

    const jsonData = JSON.stringify(data);
    
    const url = 'https://us1.api.mailchimp.com/3.0/lists/5003c42f99';

    const options = {
        method: "POST",
        auth: "pravin14:3ab5f76c1ee2cb1f1f78575cb22617b3-us1jdhfajkdhfklajdfl;k"
    }

    const request = https.request(url, options, function(response){

        if  (response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        } else {
            res.send(__dirname + "/failure.html");
        }
        
        
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();

    

    console.log(firstName, lastName, email);
})


app.listen(3000, function(){
    console.log("Server is running on port 3000");
})

