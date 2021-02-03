const User = require('../models/User');


function index(req, res, next) {
  User.find({}, function(err, users) {
    res.render('users/index', { 
      users,
      user: req.user
     });
  });
}

// needs more work with tosin
const show = ( req, res ) => {
  const _id = req.params.userId
  
  User.findById( _id )
    .populate('recipes')
    .exec((err, foundProfile) => {
      if (err) return res.status(500).json({
        status: 500,
        data: foundProfile,
        error: [{ message: 'Something went wrong. Please try again '}],
      });

      return res.render( 'users/profile', {user: foundProfile} );
    });
};


module.exports = {
  index,
  show,
};

