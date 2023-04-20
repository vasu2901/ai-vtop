const express = require('express');
const fetchUser = require('../MiddleWare/fetchUser');
const Marks = require('../models/Marks');
const User = require('../models/User');
const router = express.Router();
router.post('/', fetchUser, async (req, res) => {
    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select("-password");
        const marks = await Marks.find({ facultyname: user.name });
        if (marks) {
            return res.json(marks);
        }

        return res.json(user.name);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal Server Error");
    }
})
router.get('/debarred', fetchUser, async (req, res) => {
    try {
        try {
            const marks = await Marks.find({$or: [{grades: "N1"},{grades: "N2"},{grades: "N3"},{grades: "N4"},]});
            if (marks) {
                return res.json({ success: true, marks: marks });
            }
            else {
                return res.json({ success: false, message: "No such record found" }); // this is for finding the record of the students who got failed in the exams.
            }
        } catch (error) {
            res.send({ success: false, message: error }); // this is for sending the error. 
        }
    }
    catch (err) {
        res.status(500).send(err); // this is for sending the error.
    }
})
router.get('/failstud', fetchUser, async (req, res) => {
    try {
        try {
            const marks = await Marks.find({ grades: "F" });
            if (marks) {
                return res.json({ success: true, marks: marks });
            }
            else {
                return res.json({ success: false, message: "No such record found" }); // this is for finding the record of the students who got failed in the exams.
            }
        } catch (error) {
            res.send({ success: false, message: error }); // this is for sending the error. 
        }
    }
    catch (err) {
        res.status(500).send(err); // this is for sending the error.
    }
})


module.exports = router;