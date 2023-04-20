const express = require('express');
const router = express.Router();
const User = require('../models/User');
const fetchUser = require("../MiddleWare/fetchUser");
const Marks = require("../models/Marks");

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
    body('reg_date').exists(),
    body('termend_date').exists(),
], async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        const { coursename, courseid, coursetype, slot, grades, credit, facultyname, facultyid, reg_date, termend_date } = req.body;
        const userID = req.user.id;
        const user0 = await User.findById(userID).select("-password");
        const marks = new Marks({
            stud: req.user.id, name: user0.name, reg_no: user0.reg_no, coursename, courseid, coursetype, slot, grades, credit, facultyname, facultyid,reg_date, termend_date
        })
        const savedMarks = await marks.save();
        res.json({ success: "true", savedMarks: savedMarks });
    }
    catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
})
router.post('/updatemarks/:id',  async (req, res) => {
    try {
        const marks = {};
        let success = false;
        const { coursename, courseid, coursetype, slot, grades, credit, facultyname, facultyid, reg_date, termend_date } = req.body;

        if (coursename) { marks.coursename = coursename }
        if (courseid) { marks.courseid = courseid }
        if (coursetype) { marks.coursetype = coursename }
        if (slot) { marks.slot = slot }
        if (grades) { marks.grades = grades }
        if (credit) { marks.credit = credit }
        if (facultyname) { marks.facultyname = facultyname }
        if (facultyid) { marks.facultyid = facultyid }
        
        if (reg_date) { marks.reg_date = reg_date }
        if (termend_date) { marks.termend_date = termend_date }

        let savedMarks = await Marks.findById(req.params.id);
        if (!savedMarks) { return res.status(404).send({success, message: "Not Found" }); }

        savedMarks = await Marks.findByIdAndUpdate(req.params.id, { $set: marks }, { new: true });
        success = true;
        res.json(savedMarks,success);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})
router.delete('/deletemarks/:id', fetchUser, async (req, res) => {
    try {
        // Find the marks to be delete and delete it
        let marks = await Marks.findById(req.params.id);
        if (!marks) { return res.status(404).send("Not Found") }
        marks = await Marks.findByIdAndDelete(req.params.id)
        const marks0 = await Marks.find()
        res.json({ "Success": "marks has been deleted", marks: marks0 });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router