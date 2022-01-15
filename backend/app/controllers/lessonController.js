const db = require("../models");
const Lesson = db.lessons;


// Retrieve all  from the database.
exports.findAll = (req, res) => {
    // const subjectName = req.query.subjectName;
    // var condition = subjectName ? { subjectName: { $regex: new RegExp(subjectName), $options: "i" } } : {};
  
    Lesson.find()
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

