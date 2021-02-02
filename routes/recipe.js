const express = require('express');
const router = express.Router();
const ctrls = require('../controllers');
const authRequired = require('../middleware/authRequired');


router.get( '/', authRequired, ctrls.recipe.index );
router.get('/addrecipe', authRequired, ctrls.recipe.addRecipeForm );
router.post('/newrecipe', ctrls.recipe.newRecipe );


module.exports = router;
