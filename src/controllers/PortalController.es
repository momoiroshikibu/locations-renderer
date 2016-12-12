export default function portal(req, res) {
    res.send({
        message: 'This is the portal page.',
        session: req.session
    });
}
