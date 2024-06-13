const mongoose = require('mongoose');

const StudentFormSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    education: String,
    year: String,
    technologies: String,
    mobile: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    pdf_file: Buffer
});

module.exports = mongoose.model('StudentData', StudentFormSchema);
