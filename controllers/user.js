const User = require('../models/User');
const Recipe = require('../models/Recipe')


function index(req, res, next) {
  User.find({}, function(err, users) {
    res.render('users/index', { 
      users,
      user: req.user,
      recipe: req.user.recipes,
     });
  });
}


// needs more work with tosin
const show = ( req, res ) => {
  console.log(req.body);
  const userId = req.session.passport.user;
  
  User.findById(userId).populate('recipe').exec(function(err, foundUser) {
    if (err) return console.log(err)
    console.log(foundUser)
    res.render('users/show', {
      foundUser: foundUser,
    })
  })
};


module.exports = {
  index,
  show,
};

