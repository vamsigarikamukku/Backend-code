const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusinessDataSchema = new Schema({

    first_name: {
          type: String,
          required: true
        },

    last_name: { 
        type: String, 
        required: true
        },

    email: { 
        type: String, 
        required: true
        },

    company_name: { 
        type: String, 
        required: true 
        },

    field: { 
        type: String, 
        required: true 
        },

    budget: { 
        type: Number, 
        required: true 
        },

    mobile: { 
        type: String, 
        required: true 
        },

    address: { 
        type: String, 
        required: true 
        },

    city: { 
        type: String, 
        required: true 
       },

    state: { 
        type: String, 
        required: true 
       },

    pincode: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('BusinessData', BusinessDataSchema);
