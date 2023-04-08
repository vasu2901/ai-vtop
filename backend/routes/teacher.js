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


module.exports = router;