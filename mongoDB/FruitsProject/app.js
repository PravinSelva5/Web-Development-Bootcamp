//jshint esversion:6

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect(function(err){
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    insertDocuemnts(db, function(){
        client.close();
    });
});

const insertDocuemnts = funciton(db, callback){
    // Get the documents collection
    const collection = db.collection('fruits');

    // Insert some documents
    collection.insertMany([
        {
            name: "Apple",
            score: 8,
            review: "Great fruit!"
        },{
            name: "Banana",
            score: 9,
            review:"Great stuff!"
        }, {
            name: "Orange",
            score: 7,
            review: "kinda sour"
        }
    ], function(err, result){
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, results.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}