const Recipe = require('../models/Recipe');

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

module.exports = {
    index,
}