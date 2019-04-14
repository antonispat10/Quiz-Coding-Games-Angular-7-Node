const 
  User
 = require('../models/user')

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require('dotenv').config();


mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0-jmntn.mongodb.net/q-angular?retryWrites=true", { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
  
bcrypt.hash('admin', 10).then(hash => {
    const user = new User({
      email: 'admin@admin.com',
      password: hash
    });
    user
      .save()
});  
   



