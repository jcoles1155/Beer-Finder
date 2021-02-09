const mongoose = require('mongoose');
const { Schema } = mongoose;

  
  const commentSchema = new Schema({
  caption: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Comment', commentSchema);