var express = require('express')
var router = express.Router()

const usersCtrl = require('../controllers/user');
const recipesCtrl = require('../controllers/recipes');


router.get('/', isLoggedIn, usersCtrl.index);

router.post('/', isLoggedIn, recipesCtrl.newRecipe);
router.get('/', usersCtrl.show);

// DELETE /recipe/:id
// router.delete('/recipe/:id', isLoggedIn, usersCtrl.delRecipe);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
