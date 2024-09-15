const express = require('express');
const router = express.Router();
const { createAttendance, getAttendances, getAttendance, updateAttendance } = require('../controllers/attendanceController');



router.post('/', createAttendance);
router.get('/', getAttendances);
router.get('/:id', getAttendance);
router.patch('/:id', updateAttendance);
//router.delete('/:id', deleteAttendance);

module.exports = router;