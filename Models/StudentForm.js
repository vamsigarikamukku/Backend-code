const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentDataSchema = new Schema({

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

    education: { 
        type: String, 
        required: true 
        },

    year: { 
        type: String, 
        required: true 
        },

    technologies: { 
        type: String, 
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
    },
    pdf_file: {
        type: Buffer,
        required: true 
    },
    
});

module.exports = mongoose.model('StudentData', StudentDataSchema);

