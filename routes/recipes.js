const express = require('express');
const router = express.Router();

const recipesCtrl = require('../controllers/recipes');
// const authRequired = require('../middleware/authRequired');


router.get( '/', isLoggedIn, recipesCtrl.index );
// router.get('/addrecipe', isLoggedIn, recipeCtrl.addRecipeForm );
router.post('/new', isLoggedIn, recipesCtrl.newRecipe );
router.get( '/new', isLoggedIn, recipesCtrl.newRecipeIndex );

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
