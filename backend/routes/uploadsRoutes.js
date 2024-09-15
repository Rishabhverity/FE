const express = require('express');
//const uploadFile = require("../controllers/uploadController");
const router = express.Router();


const path = require('path');
const fs = require('fs');
const multer = require('multer');

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', 'uploads')); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to avoid name conflicts
    }
});

// Init multer
const upload = multer({ storage });

// POST route to upload purchaseOrder
router.post('/upload/purchaseOrder', upload.single('file'), (req, res) => {
    try {
        res.json({ fileUrl: `/uploads/${req.file.filename}` }); // Return the file URL to the frontend
    } catch (error) {
        res.status(500).send('Error uploading purchase order');
    }
});

// POST route to upload invoice
router.post('/upload/invoice', upload.single('file'), (req, res) => {
    try {
        res.json({ fileUrl: `/uploads/${req.file.filename}` }); // Return the file URL to the frontend
    } catch (error) {
        res.status(500).send('Error uploading invoice');
    }
});

// GET route to serve the uploaded purchaseOrder file
router.get('/upload/purchaseOrder/:id', (req, res) => {
    const fileId = req.params.id;
    const filePath = path.join(__dirname, '..', 'uploads', fileId);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
});

// GET route to serve the uploaded invoice file
router.get('/upload/invoice/:id', (req, res) => {
    const fileId = req.params.id;
    const filePath = path.join(__dirname, '..', 'uploads', fileId);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
});

// POST route for file uploads
// router.post('/upload/:type', upload.single('file'), async (req, res) => {
//   try {
//     const { type } = req.params;
//     const { accountId } = req.body;

//     // Check if file, type, and accountId are provided
//     if (!req.file || !['purchaseOrder', 'invoice'].includes(type) || !accountId) {
//       return res.status(400).json({ message: 'Invalid file, type, or missing accountId.' });
//     }

//     // Save the file with a unique name to avoid overwriting
//     const fileName = `${type}_${accountId}_${Date.now()}_${req.file.originalname}`;
//     const filePath = path.join(__dirname, 'uploads', fileName);
    
//     // Save the file to the server
//     fs.writeFileSync(filePath, req.file.buffer);

//     // Update the account record with the file URL
//     const fileUrl = `/uploads/${fileName}`;
//     const updateData = { [type]: fileUrl };

//     const updatedAccount = await Account.findByIdAndUpdate(accountId, updateData, { new: true });

//     if (!updatedAccount) {
//       return res.status(404).json({ message: 'Account not found.' });
//     }

//     res.status(200).json({ message: `${type} uploaded successfully`, fileUrl, account: updatedAccount });
//   } catch (err) {
//     console.error('Error uploading file:', err);
//     res.status(500).json({ message: 'Server error', error: err.message });
//   }
// });


module.exports = router;

