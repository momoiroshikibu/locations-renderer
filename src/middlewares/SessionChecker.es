export default function SessionChecker(req, res, next) {
    if (req.session.accessToken) {
        next();
    } else {
        res.redirect('/login');
    }
}
