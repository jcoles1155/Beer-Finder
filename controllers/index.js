

function index(req, res) {
    res.render('index', {
        user: req.user,
        recipe: req.recipes,
    });
}


module.exports = {
    // flights: require('./flights'),
    index
}

