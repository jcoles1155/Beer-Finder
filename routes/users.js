var express = require('express')
var router = express.Router()

const usersCtrl = require('../controllers/user');


router.get('/', isLoggedIn, usersCtrl.index);

router.post('/recipe', isLoggedIn, usersCtrl.addRecipe);

// DELETE /recipe/:id
router.delete('/recipe/:id', isLoggedIn, usersCtrl.delRecipe);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
