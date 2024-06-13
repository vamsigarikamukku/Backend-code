const express = require('express');
const router = express.Router();
const BusinessData = require('../Models/BusinessForm');

router.post('/business-form', async (req, res) => {
    try {
        console.log(req.body); 
        const { first_name, last_name, email, company_name, field, budget, mobile, address, city, state, pincode } = req.body;

        if (!first_name || !last_name || !email || !company_name || !field || !budget || !mobile || !address || !city || !state || !pincode) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const isExist = await BusinessData.findOne({ last_name: last_name });

        if (isExist) {
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

module.exports = router;