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
      recipeName: req.body.recipeName,
      style: req.body.style,
      method: req.body.method,
      batchSize: req.body.batchSize,
      ABV: req.body.ABV,
      SRM: req.body.SRM,
      yeast: req.body.yeast,
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
    });
    console.log(req.user.recipes);
  }


  function show( req, res, next ) {
    
    // console.log(req.user, 'current user');
    const userId = req.session.passport.user;
    Recipe.findById(req.params.id, function(err, foundRecipe){
      if (err) return console.log(err)
      console.log(foundRecipe);
      res.render(`recipe/index`, {
        foundRecipe,
        userId,
      })
    })
  };




function addRecipeForm(req, res, next) {
  User.find({}, function(err, users) {
    res.render('partials/_recipeAddForm/_recipeAddForm', { 
      users,
      user: req.user,
      recipe: req.user.recipes,
     });
  });
}

// work with adonis
function deleteRecipe( req, res, next ) {
    
  // console.log(req.user, 'current user');
  // const userId = req.session.passport.user;
  Recipe.findByIdAndDelete(req.params.id, function(err, foundRecipe){
    if (err) return console.log(err)
    console.log(foundRecipe);
    User.findById(foundRecipe.user, function(err, foundUser) {
      if (err) return console.log(err)
      foundUser.recipes.remove(foundRecipe)
      foundUser.save()
      res.redirect('/users')
    })
  })
};

// EDIT RECIPE PRESENTATIONAL

function editRecipeIndex(req, res, next) {
  const userId = req.session.passport.user;
    Recipe.findById(req.params.id, function(err, foundRecipe){
      if (err) return console.log(err)
      console.log(foundRecipe);
      res.render(`recipe/edit`, {
        foundRecipe,
        userId,
      })
    })
}

function editRecipe(req, res, next) {
  const userId = req.session.passport.user;

  const newRecipe = {
    img: req.body.img,
    caption: req.body.caption,
    user: userId,
    recipeName: req.body.recipeName,
    style: req.body.style,
    method: req.body.method,
    batchSize: req.body.batchSize,
    ABV: req.body.ABV,
    SRM: req.body.SRM,
    yeast: req.body.yeast,
  }; console.log('editRecipe')
  console.log(req.params.id)
  const id = mongoose.Types.ObjectId(req.params.id);
  Recipe.findByIdAndUpdate(id, newRecipe,
    res.render(`recipe/index`, {
          foundRecipe,
          userId,
    }));
  // Recipe.findById(req.params.id, function(err, foundRecipe){
  //   if (err) return console.log(err)
  //   console.log(foundRecipe);
  //   foundRecipe.updateOne(newRecipe, 
  //     res.render(`recipe/index`, {
  //     foundRecipe,
  //     userId,
  //   }));
    
};

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
    show,
    newRecipeIndex,
    deleteRecipe,
    editRecipeIndex,
    editRecipe,
}