const express = require('express');
const bcrypt = require('bcryptjs')
const User = require("../models/User");
const fetchUser = require("../middleware/fetchUser");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'harryisagoodboy';
//Signup.
router.post('/createuser', [
    body('email').isEmail(),
    body('password').isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "Sorry a user already exists!" })
        }
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            reg_no: req.body.reg_no,
            email: req.body.email,
            password: secpass
        })
        const data = {
            user: {
                id: user._id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken });
    }
    catch (err) {
        return res.status(400).json({ error: err });
    }
})

// Login
router.post('/login', [
    body('email').isEmail(),
    body('password').exists()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "Please enter your valid credentials" });
        }
        const passwordcompare = await bcrypt.compare(password, user.password);
        if (!passwordcompare) {
            return res.status(404).json({ error: "Please enter your valid credentials" });
        }
        const data = {
            user: {
                id: user._id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken });
    }
    catch (err) {

        console.log(err.message);
        return res.status(500).send("Internal Server Error");
    }
})

// Get login 
router.get('/getuser', fetchUser, async (req, res) => {

    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select("-password");
        res.json(user);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).send("Internal Server Error");
    }
})

module.exports = router