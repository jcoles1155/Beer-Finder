const User = require('../models/User');
const Recipe = require('../models/Recipe')


function index(req, res, next) {
  console.log(req.user._id, 'current user');
  Recipe.find({user: req.user._id}).populate('user').exec( function(err, recipes) {
    
    res.render('users/index', { 
      recipes,
     });
  });
}


// needs more work with tosin
const show = ( req, res ) => {
  console.log(req.user, 'current user');
  const userId = req.session.passport.user;
  
  
  User.findById(userId).populate('recipe').exec(function(err, foundUser) {
    if (err) return console.log(err)
    
    res.render('partials/_showRecipes/_showRecipes', {
      foundUser,
      userId,
    })
  })
};




module.exports = {
  index,
  show,
};

