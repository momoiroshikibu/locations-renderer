export default function SessionChecker(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/index');
    }
}
