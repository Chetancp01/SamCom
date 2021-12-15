const express = require('express');
const router = express.Router();
const ownerVehicle = require('../../controller/ownerVehicle');
const vehicalCont = require('../../controller/vehicalCont')

router.post('/userAdd',ownerVehicle.userAdd);

router.post('/vehicleAdd',vehicalCont.vehicleAdd);

router.post('/owneAdd',vehicalCont.ownerAdd);

router.get('/user_owned_vehicle/:userId',vehicalCont.getvehicleDetails);

router.post('/vehicles', vehicalCont.getvehicle);

module.exports = router;