const Recipe = require('../models/Recipe');
const User = require('../models/User');

const index = ( req, res ) => {

    Recipe.find({})
    .populate('user')
    .exec( ( err, posts ) => {
        if ( err ) return console.log(err)

      console.log(req.session.user)

      const context = {
        recipes,
        currentUser: req.session.user
    }

      res.render('recipeList/recipeList', context );
    })
}

// presentational
const addRecipeForm = ( req, res ) => {
    res.render('recipe/new');
  }
  
const newRecipe = ( req, res ) => {
    console.log(req.session);
    const userId = req.session.passport.user;
  
    Recipe.create( req.body, ( err, createdRecipe ) => {
      if ( err ) return console.log(err)
  
      User.findById( userId, ( err, foundUser ) => {
  
        createdRecipe.user = foundUser._id;
        createdRecipe.save();
  
        foundUser.recipes.push(createdRecipe._id);
        foundUser.save();
  
        res.redirect('/users');
      });
    });
  }

module.exports = {
    index,
    addRecipeForm,
    newRecipe
}