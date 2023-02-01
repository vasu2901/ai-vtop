const express = require('express');
const router = express.Router();
const User = require('../models/User');
const fetchUser = require("../MiddleWare/fetchUser");
const Marks = require("../Models/Marks");

const { body, validationResult } = require('express-validator');
// fetching all marks of the students.
router.get('/getmarks', fetchUser, async (req, res) => {
    try {
        const marks = await Marks.find({ stud: req.user.id })
        res.json(marks);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
})

// for adding marks;
router.post('/postmarks', fetchUser, [
    body('coursename').exists(),
    body('courseid').exists(),
    body('coursetype').exists(),
    body('grades').exists(),
    body('credit').exists(),
    body('facultyname').exists(),
    body('facultyid').exists(),
], async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        const { coursename, courseid, coursetype,slot, grades, credit, facultyname, facultyid } = req.body;
        const userID = req.user.id;
        const user0 = await User.findById(userID).select("-password");
        const marks = new Marks({
            stud: req.user.id,name: user0.name,reg_no: user0.reg_no , coursename, courseid, coursetype,slot, grades, credit, facultyname, facultyid
        })
        const savedMarks = await marks.save();
        res.json({success: "true",savedMarks: savedMarks});
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
})
router.post('/updatemarks/:id', fetchUser, async (req, res) => {
    try {
        const marks = {};
        const { coursename, courseid, coursetype, grades, facultyname, facultyid } = req.body;

        if (coursename) { marks.coursename = coursename }
        if (courseid) { marks.courseid = courseid }
        if (coursetype) { marks.coursetype = coursename }
        if (grades) { marks.grades = grades }
        if (facultyname) { marks.facultyname = facultyname }
        if (facultyid) { marks.facultyid = facultyid }

        let savedMarks = await Marks.findById(req.params.id);
        if (!savedMarks) { return res.status(404).send({ message: "Not Found" }); }
        if (savedMarks.stud.toString() !== req.user.id) { return res.status(404).send({ message: "Not Allowed" }); }

        savedMarks = await Marks.findByIdAndUpdate(req.params.id, { $set: marks }, { new: true });
        res.json(savedMarks);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
})
router.delete('/deletemarks/:id', fetchUser, async (req, res) => {
    try {
        // Find the marks to be delete and delete it
        let marks = await Marks.findById(req.params.id);
        if (!marks) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this marks
        if (marks.stud.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        marks = await Marks.findByIdAndDelete(req.params.id)
        res.json({ "Success": "marks has been deleted", marks: marks });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router