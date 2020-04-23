module.exports = (req, res, next) => {
    console.log('middelware', req.session);
    if (req.session.loggedIn) {
        next();
    } else {
        res.status(401).json({ message: "Unauthorized access" })
    }
}
