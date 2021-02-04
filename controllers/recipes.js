const Recipe = require('../models/Recipe');
const User = require('../models/User');



const index = ( req, res ) => {

    Recipe.find({})
    .populate('user')
    .exec( ( err, recipes ) => {
        if ( err ) return console.log(err)
      const context = {
        recipes,
    }
      res.render('recipes/index', context );
    })
}

// presentational for browsing



// presentational for new recipe

function newRecipeIndex(req, res, next) {
  User.find({}, function(err, users) {
    res.render('recipes/new', { 
      users,
      user: req.user,
      recipes: req.user.recipe,
     });
  });
}

function newRecipe( req, res, next ) {
    console.log(req.body);
    const userId = req.session.passport.user;

    const newRecipe = {
      img: req.body.img,
      caption: req.body.caption,
      user: userId,
    };

    console.log(newRecipe);
  
    Recipe.create( newRecipe, ( err, createdRecipe ) => {
      if ( err ) return console.log(err);

      User.findById( userId , (err, foundUser) => {
        if ( err ) return console.log(recipeErr);

        foundUser.recipes.push(createdRecipe._id)
        foundUser.save()
        console.log(foundUser);
        // console.log('type:', typeof foundRecipesList);

        return res.render( 'users', { recipes: foundUser.recipes } );
      });
      console.log(req.body);
      /* req.user.recipes.save().then(recipe => {
        recipe === newRecipe;
      }) */
    });
    console.log(req.user.recipes);
  }







function addRecipeForm(req, res, next) {
  User.find({}, function(err, users) {
    res.render('partials/_recipeAddForm/_recipeAddForm', { 
      users,
      user: req.user,
      recipe: req.user.recipes,
     });
  });
}

// function navBar(req, res, next) {
//   User.find({}, function(err, users) {
//     res.render('partials/_mainNav/_navBar', { 
//       users,
//       user: req.user,
//       recipe: req.user.recipes,
//      });
//   });
// }




// needs more work with tosin
// const showList = ( req, res ) => {
//   const _id = req.params.userId
  
//   User.findById( _id )
//     .populate('recipes')
//     .exec((err, foundProfile) => {
//       if (err) return res.status(500).json({
//         status: 500,
//         data: foundProfile,
//         error: [{ message: 'Something went wrong. Please try again '}],
//       });

//       return res.render( 'users/index', {user: foundProfile} );
//     });
// };


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
    newRecipe,
    // navBar,
    newRecipeIndex,
}