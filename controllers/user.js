const User = require('../models/User');


function index(req, res, next) {
  User.find({}, function(err, users) {
    res.render('users/index', { 
      users,
      user: req.user
     });
  });
}

function addRecipe(req, res) {
  req.user.recipe.push(req.body);
   req.user.save(function(err) {
     res.redirect('/users');
   });
}

function delRecipe(req, res) {
  // DEBUGGING DELETE
  /* console.log(req.params.id)
  console.log(req.user.facts);
  console.log(req.user.facts[req.params.id]); */
  req.user.recipes.splice(req.params.id, 1)
  req.user.save(function(err) {
    if (err) return res.send("ERROR");
    res.redirect('/recipes');
  })
}


module.exports = {
  index,
  addRecipe,
  delRecipe,
};

