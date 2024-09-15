const express = require('express');
const multer = require('multer');
const XLSX = require('xlsx');
const mongoose = require('mongoose');
const Attendance = require('../models/attendance'); // Assuming you have an Attendance model

const router = express.Router();

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploadExcel/'); // You may need to create the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route to handle Excel file upload and parsing
router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'File is required' });
    }

    const filePath = req.file.path;

    // Read the Excel file
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Parse the Excel sheet into JSON format
    const data = XLSX.utils.sheet_to_json(sheet);

    // Iterate through the data and save it to the attendance database
    for (let record of data) {
      const { serialNumber, name, emailID } = record;

      // Save each record to the database
      const attendance = new Attendance({
        serialNumber,
        name,
        emailID,
        present: false,
      });

      await attendance.save();
    }

    res.status(200).json({ message: 'Excel data successfully uploaded and saved' });
  } catch (error) {
    console.error('Error processing Excel file:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
