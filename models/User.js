const mongoose = require('mongoose');
const { Schema } = mongoose;

// EMBEDDED RELATIONSHIP
// const factSchema = new mongoose.Schema({
//     text: String
//   }, {
//     timestamps: true
//   });
  
  const userSchema = new Schema({
    name: String,
    email: {
      type: String,
      unique: true,
    },
    avatarURL: String,
    // facts: [factSchema],
    googleId: String,
    photo: String,
    recipes: [{
      type: mongoose.Types.ObjectId,
      ref: 'Recipe'
    }],
    comments: [{
      type: mongoose.Types.ObjectId,
      ref: 'Comment'
    }],
    likes: [{
      type: mongoose.Types.ObjectId,
      ref: 'Recipe'
    }],
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);