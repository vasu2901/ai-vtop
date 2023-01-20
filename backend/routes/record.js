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
                const marks = await Marks.find({ stud : user.id });
                if (marks) {
                    return res.json(marks);
                }
            }
            if(req.body.faculty_no && req.body.courseid)
            {
                const marks = await Marks.find({ facultyid : req.body.faculty_no, courseid: req.body.courseid});
                if (marks) {
                    return res.json(marks);
                }
            }
            else{
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


module.exports = router;