const express = require('express');
const router = express.Router();

const recipesCtrl = require('../controllers/recipes');



router.get( '/', isLoggedIn, recipesCtrl.index );
router.get( '/:id/edit', isLoggedIn, recipesCtrl.editRecipeIndex);







function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;











