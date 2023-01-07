const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Marks = require('../Models/Marks');
const User = require('../models/User');
const router = express.Router();
router.get('/', fetchUser, async (req, res) => {
    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select("-password");
        const marks = await Marks.find({facultyname : user.name});
        if (marks) {
            return res.json(req.user.id);
        }

        return res.json(user.name);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal Server Error");
    }
})


module.exports = router;