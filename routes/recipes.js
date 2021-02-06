const express = require('express');
const router = express.Router();

const recipesCtrl = require('../controllers/recipes');



router.get( '/', isLoggedIn, recipesCtrl.index );
router.post('/new', isLoggedIn, recipesCtrl.newRecipe );
router.get( '/new', isLoggedIn, recipesCtrl.newRecipeIndex );
router.get( '/:id', isLoggedIn, recipesCtrl.show)
// router.post( '/:id/edit', isLoggedIn, recipesCtrl.edit)
router.delete( '/:id', isLoggedIn, recipesCtrl.deleteRecipe)


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
