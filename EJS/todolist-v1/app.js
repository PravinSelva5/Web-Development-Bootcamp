// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

let items = ["Buy Food", "Cook Food", "Eat Food"];


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    let today = new Date();
    
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    
    res.render('list', 
    
        { day: day, newListItems: items});
});

app.post('/', function(req, res){
      let item = req.body.newItem;
      items.push(item);

    res.redirect("/");
    
});




// You can use res.write() if you need to send more than one HTML tags.
// Once you write all your res.write(), you can end it with res.send()

app.listen(3000, function(){
    console.log("Server started on port 3000");
})
