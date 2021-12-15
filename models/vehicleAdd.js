const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicalAddSchema = new Schema({
    vehicle_name: {
        type: String
    },
    vehicle_brand: {
        type: String
    },
    vehicle_number: {
        type: String
    }
});

const vehicle = mongoose.model('vehicle',vehicalAddSchema);
module.exports = vehicle;