const vehicle = require('../models/vehicleAdd');
const ownerShip = require('../models/vehicleOwnershipAdd');

//add vehicle 
exports.vehicleAdd = (req, res) => {
    const vehicles = new vehicle(req.body);
    vehicles.save().then((result) => {
        return res.status(200).json({
            message: 'vehicle add successfully',
            vehicle: result
        })
    }).catch((err) => {
        return res.status(500).json({
            message: 'vehicle add failed',
            error: err
        })
    })
}

//add ownership 
exports.ownerAdd = (req, res) => {
    const owners = new ownerShip(req.body);
    owners.save()
    .then((result) => {
        return res.status(200).json({
            message: 'owner add successfully',
            data: result
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: 'owner add failed',
            error: err
        })
    })
}

//get vehicle details
exports.getvehicleDetails = (req, res) => {
    const user_Id = req.params.userId;
    console.log(user_Id);
    ownerShip.find({ user: user_Id }).populate('vehicle')
    .then((vehicle) => {
        return res.status(200).json({
            message: 'vehicles fetch success',
            vehicle: vehicle
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: 'vehicles fatch failed',
            error: err
        })
    })
}

//get vehicle and paggination 
exports.getvehicle = (req, res) => {
    ownerShip.find()
    .populate('vahicle')
    .populate('user')
    .limit(5)
    .skip(req.body.skip)
    .then((result) => {
        return res.status(200).json({
            message: 'get vehicle successfully',
            data: result
        })
    })
    .catch((err) => {
        return res.status(500).json({
            message: 'Internal server error',
            error: err
        })
    })
}
