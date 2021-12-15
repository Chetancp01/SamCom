const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userAddSchema = new Schema({

    name : {
        type: String
    },
    surname: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    location: {
        latitude: {
            type: String
        },
        lognitude: {
            type: String
        }
    }

});

const user = mongoose.model('user',userAddSchema);

module.exports = user;
