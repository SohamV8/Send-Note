const express = require('express');
const router = express.Router();
const upload = require('../utils/upload');
const cloudinary = require('../utils/cloudinary');
const FormModel = require('../models/FormModel');

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    // Upload file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    const fileUrl = result.secure_url;

    // Create a new form entry
    const formEntry = new FormModel({
      email: req.body.email,
      subject: req.body.subject,
      year: req.body.year,
      fileUrl: fileUrl,
    });

    // Save form entry to MongoDB
    await formEntry.save();

    // Send response
    res.json({
      message: 'File uploaded and data saved successfully',
      fileUrl: fileUrl,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
