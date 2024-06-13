const mongoose = require('mongoose');

const BusinessFormSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    company_name: String,
    field: String,
    budget: Number,
    mobile: String,
    address: String,
    city: String,
    state: String,
    pincode: String
});

module.exports = mongoose.model('BusinessData', BusinessFormSchema);
