const Attendance = require('../models/attendance');

const createAttendance = async (req, res) => {
    try {
        const attendance = new Attendance(req.body);
        await attendance.save();
        res.status(201).send(attendance);
    } catch (error) {
        res.status(400).send(error);
    }
};

const getAttendances = async (req, res) => {
    // console.log("req recieved");
    try {
        const attendances = await Attendance.find({});
        // console.log(attendances);
        res.status(200).send(attendances);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findById(req.params.id);
        if (!attendance) {
            return res.status(404).send();
        }
        res.status(200).send(attendance);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!attendance) {
            return res.status(404).send();
        }
        res.status(200).send(attendance);
    } catch (error) {
        res.status(400).send(error);
    }
};

const deleteAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.findByIdAndDelete(req.params.id);
        if (!attendance) {
            return res.status(404).send();
        }
        res.status(200).send(attendance);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createAttendance,
    getAttendances,
    getAttendance,
    updateAttendance,
    
}