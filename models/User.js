const mongoose = require('mongoose');

// const factSchema = new mongoose.Schema({
//     text: String
//   }, {
//     timestamps: true
//   });
  
  const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    // facts: [factSchema],
    googleId: String
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);