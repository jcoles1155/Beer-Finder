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
    console.log(req.body);
    const userId = req.session.passport.user;

    const newRecipe = {
      img: req.body.img,
      caption: req.body.caption,
      userId,
    };
  
    Recipe.create( newRecipe, ( err, createdRecipe ) => {
      if ( err ) return console.log(err);

      Recipe.find({ userId }, (recipeErr, foundRecipesList) => {
        if ( recipeErr ) return console.log(recipeErr);

        // console.log('type:', typeof foundRecipesList);

        return res.render( 'recipeList/recipeList', { recipes: foundRecipesList } );
      });
    });
  }

  /* function addRecipe(req, res) {
  req.user.recipe.push(req.body);
   req.user.save(function(err) {
     res.redirect('/users');
   });
}

function delRecipe(req, res) {
  // DEBUGGING DELETE
  /* console.log(req.params.id)
  console.log(req.user.facts);
  console.log(req.user.facts[req.params.id]); 
  req.user.recipes.splice(req.params.id, 1)
  req.user.save(function(err) {
    if (err) return res.send("ERROR");
    res.redirect('/recipes');
  })
} */

module.exports = {
    index,
    addRecipeForm,
    newRecipe
}