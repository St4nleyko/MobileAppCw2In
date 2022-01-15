const db = require("../models");
const User = db.users;


// Retrieve all  from the database.
exports.findAll = (req, res) => {  
    User.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving data."
        });
      });
  };

