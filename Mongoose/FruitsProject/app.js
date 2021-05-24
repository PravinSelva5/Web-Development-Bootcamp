//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    }, 
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: {
        type: Number,
        min: 1,
        max: 10 
    }, 
    review: "Pretty solid as a fruit."
});

const pineapple = new Fruit ({
    name: "Pineapple",
    score: 9,
    review: "Great fruit!"
});

const mango = new Fruit ({
    name: "Mango",
    score: 7,
    review: "Great fruit!"
});

//pineapple.save();
mango.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);


/* const person = new Person({
    name:"John",
    age: 37,
    
}); */

Person.updateOne({name: "Amy"}, {favouriteFruit: mango}, function(err){
    if (err){
        console.log(err);
    } else {
        console.log("document has been updated.");
    }
});

//fruit.save();
  person.save();


// Reading from our database with Mongoose
Fruit.find(function(err, fruits){
    if (err){
        console.log(err);
    } else {
        mongoose.connection.close();

        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });
    }
});

/*
// Updating in mongoose
Fruit.updateOne({_id: "60aa990bb55af1170ee6d3bf"}, {name: "Red Apples"}, function(err){
    if (err){
        console.log(err);
    } else {
        console.log("Successfully updated the document.")
    }
});
*/

// Deleting in mongoose

/* Fruit.deleteOne({name: "Red Apples"}, function(err){
    if (err){
        console.log(err);
    } else {
        console.log("Successfully deleted the document");
    }
}); */

// Deleting Many in mongoose

Person.deleteMany({name: "John"}, function(err){
    if (err){
        console.log(err);
    } else {
        console.log("Successfully deleted all the documents!");
    }
})