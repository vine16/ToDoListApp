const mongoose = require('mongoose');

let db; //will hold the database connection
async function main() {
    // Yes, that is correct. The URL specified in the mongoose.connect() method is the location of the MongoDB server that hosts the database you want to connect to.
    //connnectify_development is the name of database, which will be created automatically
    db = await mongoose.connect('mongodb://127.0.0.1:27017/my_to_do_webapp'); //connect mongoose to mongoDB
    console.log('connected to the Database :: MongoDB');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = db;