const express = require('express');
const router = express.Router();
const multer = require('multer');
const BusinessData = require('../Models/BusinessForm');
const StudentData = require('../Models/StudentForm');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/business-form', async (req, res) => {
    try {
        console.log(req.body); 
        const { first_name, last_name, email, company_name, field, budget, mobile, address, city, state, pincode } = req.body;
        
        if (!mobile) {
            return res.status(400).json({ message: 'Mobile field is required.' });
        }

        const isExit = await BusinessData.findOne({ last_name: last_name });

        if (isExit) {
            return res.status(250).json({ message: "Change Last Name..." });
        } else {
            const newData = new BusinessData({
                first_name,
                last_name,
                email,
                company_name,
                field,
                budget,
                mobile,
                address,
                city,
                state,
                pincode,
            });
            await newData.save();
            return res.status(201).json({ message: 'Your Data Submitted Successfully...' });
        }
    } catch (error) {
        console.log(error.message, 'business-form');
        return res.status(500).json({ message: 'Internal Server Error...' });
    }
});

router.post('/student-form', upload.single('pdf_file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded or file field name is incorrect.' });
        }

        const studentData = new StudentData({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            education: req.body.education,
            year: req.body.year,
            technologies: req.body.technologies,
            mobile: req.body.mobile,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            pincode: req.body.pincode,
            pdf_file: req.file.buffer 
        });

        studentData.save()
            .then(() => res.status(201).send('Student data saved successfully!'))
            .catch(error => res.status(400).send(`Error: ${error.message}`));
    } catch (error) {
        console.error('Error in student-form route:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
