

function index(req, res) {
    res.render('index', {
        user: req.user
    });
}


module.exports = {
    // flights: require('./flights'),
    index
}

