exports.mycsrfToken = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}