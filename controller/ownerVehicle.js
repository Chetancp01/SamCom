const user = require('../models/userAdd');

exports.userAdd = (req, res) => {
    const users = new user(req.body);
    users.save().then((result) => {
        return res.status(200).json({
            message: 'user add successfully',
            user: result
        });
    }).catch((err) => {
        return res.status(500).json({
            message: 'internal server error',
            error: err
        })
    })
}