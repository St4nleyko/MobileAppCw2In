const express = require("express");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const app = express();

var corsOptions = {
  origin: "https://cst3145mobileapp.herokuapp.com/"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the backend of the application." });
});

// database
let db;
MongoClient.connect('mongodb+srv://Admin:root@cluster0.5hkr4.mongodb.net/cw2group?retryWrites=true&w=majority', (err, client) => {
  db = client.db('cw2group')
  const ObjectID = require('mongodb').ObjectID;

  app.param('collectionName', (req, res, next, collectionName) => {
    req.collection = db.collection(collectionName)
    return next()
  })
  //get all from collection
  app.get('/collection/:collectionName', (req, res, next) => {
    req.collection.find({}).toArray((e, results) => {
      if (e) return next(e)
        res.send(results)
    })
  });
  app.post('/collection/:collectionName', (req, res, next) => {
    req.collection.insertOne(req.body, (e, results) => {
    if (e) return next(e)
      res.send(results)
    })  
  });
  app.put('/collection/:collectionName/:id', (req, res, next) => {
    console.log('putTriggered')
    console.log(req.body);
    req.collection.updateOne(
      {_id: ObjectID(req.params.id)},
      {$set: req.body},
      {safe: true, multi: false},
      (e, result) => {
        if (e) return next(e)
          res.send(result)
    })  
  })
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});