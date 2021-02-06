const mongoose = require('mongoose');

// NEED TO:
    /* 1. set up models for 
        a. grainBill
        b. hopSchedule
        c. otherIngredients */

const recipeSchema = new mongoose.Schema({
  recipeName: {
    type: String,
    // required: true
  },
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
  // likes: [{
  //   type: mongoose.Types.ObjectId,
  //   ref: 'User'
  // }],
  // comments: [{
  //     type: mongoose.Types.ObjectId,
  //     ref: 'Comment'
  // }],
  // rating: {
  //   type: Number
  // },
  method: {
      type: String,
      enum: ['Extract', 'All Grain'],
      required: true
  },
  style: {
      type: String,
      required: true
  },
  batchSize: {
      type: Number,
      required: true,
      min: 0,
      max: 10,
  },
  // preBoilGravity: {
  //     type: Number,
  //     required: true,
  //     min: 0,
  //     max: 30,
  // },
  // originalGravity: {
  //     type: Number,
  //     required: true,
  //     min: 0,
  //     max: 30,
  // },
  // finalGravity: {
  //     type: Number,
  //     required: true,
  //     min: 0,
  //     max: 30,
  // },
  ABV: {
      type: Number,
      required: true,
      min: 0,
      max: 20,
  },
  SRM: {
      type: Number,
      requiured: true,
      min: 0,
      max: 10,
  },
  yeast: {
      type: String,
      required: true
  },
  
  // grainBill: [grainBillSchema],
  // hopSchedule: [hopScheduleSchema],
  // otherIngredients: [otherIngredients],
  
},
{
  timestamps: true
});

// EMBEDDED RELATIONSHIPS
// const hopScheduleSchema = new mongoose.Schema({
//     amount:  {
//       type: Number,
//       required: true,
//     },
//     variety: {
//       type: String,
//       required: true,
//     },
//     use: {
//       type: String,
//     },
//     time: {
//       type: Number,
//     },
//     IBU: {
//       type: Number,
//     },
//   }, {
//     timestamps: true
//   });

// const grainBillSchema = new mongoose.Schema({
//     amount: {
//       type: Number,
//       required: true,
//     },
//     fermentable: {
//       type: String,
//       required: true,
//     }
//   }, {
//     timestamps: true
//   });

// const otherIngredients = new mongoose.Schema({
//   amount: {
//     type: Number,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   Type: {
//     type: String,
//   },
//   use: {
//     type: String,
//     required: true,
//   },
//   time: {
//     type: Number,
//     required: true,
//   }
//   }
// }, {
//   timestamps: true
// });

// const hopSchedule = mongoose.model('grainBill', hopScheduleSchema )

// const grainBill = mongoose.model('grainBill', grainBillSchema )

const Recipe = mongoose.model('Recipe', recipeSchema )

module.exports = Recipe;
