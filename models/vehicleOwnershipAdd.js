const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleOwnershipAddSchema = new Schema({
    vahicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'vehicle'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const vehicleOwner = mongoose.model('VehicleOwnerShip', vehicleOwnershipAddSchema);

module.exports = vehicleOwner;