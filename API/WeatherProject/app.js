const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req, res){
    const query = req.body.cityName;
    const apiKey = "2df9c664dd26010d7629f1f79344b6d2";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png";

            res.write("<p>The weather is currently " + weatherDescription + "<p>");
            res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celsius.</h1>")
            res.write("<img src="+ imageURL + ">");
            res.send();
        })
    })


})

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

// const query = "London";
//     const apiKey = "2df9c664dd26010d7629f1f79344b6d2";
//     const unit = "metric";
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    
//     https.get(url, function(response){
//         console.log(response.statusCode);

//         response.on("data", function(data){
//             const weatherData = JSON.parse(data);
//             const temp = weatherData.main.temp;
//             const weatherDescription = weatherData.weather[0].description;
//             const icon = weatherData.weather[0].icon;
//             const imageURL = "http://openweathermap.org/img/wn/" + icon +"@2x.png";

//             res.write("<p>The weather is currently " + weatherDescription + "<p>");
//             res.write("<h1>The temperature in London is " + temp + " degrees Celsius.</h1>")
//             res.write("<img src="+ imageURL + ">");
//             res.send();
//         })
//     })



app.listen(4000, function() {
    console.log("Server is running on Port 4000");
});