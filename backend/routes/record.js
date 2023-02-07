const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Marks = require('../Models/Marks');
const User = require('../models/User');
const router = express.Router();
//const { body, validationResult } = require('express-validator');
router.get('/', fetchUser, async (req, res) => {
    try {
        try {
            if (req.body.reg_no) {
                const user = await User.findOne({ reg_no: req.body.reg_no });
                const marks = await Marks.find({ stud: user.id });
                if (marks) {
                    return res.json(marks);
                }
            }
            if (req.body.faculty_no && req.body.courseid) {
                const marks = await Marks.find({ facultyid: req.body.faculty_no, courseid: req.body.courseid });
                if (marks) {
                    return res.json(marks);
                }
            }
            else {
                const marks = await Marks.find();
                if (marks) {
                    return res.json(marks);
                }
            }
        }
        catch (err) {
            return res.status(400).send({ message: "No details found" });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Invalid credentials" });
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
router.post('/updatemarks/:id', fetchUser, async (req, res) => {
    try {
        // Find the marks to be delete and delete it
        let savedmarks = await Marks.findById(req.params.id);
        if (!savedmarks) { return res.status(404).send("Not Found") }
        const marks = {};
        const { coursename, courseid, coursetype, slot, grades, credit, facultyname, facultyid } = req.body;

        if (coursename) { marks.coursename = coursename }
        if (courseid) { marks.courseid = courseid }
        if (coursetype) { marks.coursetype = coursetype }
        if (slot) { marks.slot = slot }
        if (grades) { marks.grades = grades }
        if (credit) { marks.credit = credit }
        if (facultyname) { marks.facultyname = facultyname }
        if (facultyid) { marks.facultyid = facultyid }
        savedmarks = await Marks.findByIdAndUpdate(req.params.id, { $set: marks }, { new: true });
        res.json({ success: true, marks: savedmarks })
    } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})
module.exports = router;