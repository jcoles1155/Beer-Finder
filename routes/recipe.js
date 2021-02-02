const express = require('express');
const router = express.Router();
const recipeCtrl = require('../controllers/recipes');
// const authRequired = require('../middleware/authRequired');


router.get( '/', isLoggedIn, recipeCtrl.index );
router.get('/addrecipe', isLoggedIn, recipeCtrl.addRecipeForm );
router.post('/newrecipe', isLoggedIn, recipeCtrl.newRecipe );

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
