exports.user = (req, res, next) => {
    res.locals.user = req.session.user;
    next();
}

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        req.flash('errors', 'You need to be loged');
        req.session.save(() => res.redirect('/'));
        return
    }

    next();
}