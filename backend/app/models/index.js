const dbConfig = require("../config/dbconfig.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.lessons = require("./lessonModel.js")(mongoose);
db.users = require("./userModel.js")(mongoose);

module.exports = db;