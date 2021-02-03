const mongoose = require('mongoose');

// NEED TO:
    /* 1. set up models for 
        a. grainBill
        b. hopSchedule
        c. otherIngredients */

const recipeSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
  },
  /* user: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  },
  likes: [{
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
      type: mongoose.Types.ObjectId,
      ref: 'Comment'
  }],
  rating: {
    type: Number
  },
  method: {
      type: String,
      required: true
  },
  style: {
      type: String,
      required: true
  },
  batchSize: {
      type: Number,
      required: true
  },
  preBoilGravity: {
      type: Number,
      required: true
  },
  originalGravity: {
      type: Number,
      required: true
  },
  finalGravity: {
      type: Number,
      required: true
  },
  ABV: {
      type: Number,
      required: true
  },
  SRM: {
      type: Number,
      requiured: true
  },
  grainBill: [{
      type: mongoose.Types.ObjectId,
      ref: 'grainBill'
  }],
  hopSchedule: [{
      type: mongoose.Types.ObjectId,
      ref: 'hopSchedule'
  }],
  otherIngredients: [{
      type: mongoose.Types.ObjectId,
      ref: 'otherIngredients'
  }],
  yeast: {
      type: String,
      required: true
  },
   */
},
{
  timestamps: true
});


const Recipe = mongoose.model('Recipe', recipeSchema )

module.exports = Recipe;
