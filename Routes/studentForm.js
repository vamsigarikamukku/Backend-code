const express = require('express');
const router = express.Router();
const multer = require('multer');
const StudentData = require('../Models/StudentForm');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('pdf_file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded or file field name is incorrect.' });
            console.log('')
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
