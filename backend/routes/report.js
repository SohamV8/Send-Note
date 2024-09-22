const express = require('express');
const router = express.Router();
const upload = require('../controllers/upload');
const cloudinary = require('../controllers/cloudinary');
const FormModel = require('../models/form');

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const fileUrl = result.secure_url;

        const formEntry = new FormModel({
            email: req.body.email,
            subject: req.body.subject,
            year: req.body.year,
            fileUrl: fileUrl,
        });

        await formEntry.save();

        res.json({
            message: 'File uploaded and data saved successfully',
            fileUrl: fileUrl,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
