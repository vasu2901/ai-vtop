const express = require('express');
const bcrypt = require('bcryptjs')
const fetchUser = require("../middleware/fetchUser");
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'harryisagoodboy';
//Signup.
router.post('/createstud', [
    body('email').isEmail(),
    body('password').isLength({ min: 8 })
], async (req, res) => {
    
    let success = false;
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
        const otp = await Math.round(Math.random()*100000);
        user = await User.create({
            name: req.body.name,
            reg_no: req.body.reg_no,
            email: req.body.email,
            password: secpass,
            otp: otp,
            verified: false
        })
        const data = {
            user: {
                id: user._id
            }
        }
        success = true;
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({otp, success, authtoken });
    }
    catch (err) {
        return res.status(400).json({ error: err, message: "User exists" });
    }
})
// otp verification for users sign in
router.post('/verify',fetchUser, async (req, res) => {
    let success = false;
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user || user.verified === "True") {
            return res.status(400).send({success: success, "message":"Either username exists or username does not exists"});
        }
        if (user.otp === req.body.otp && user.email === req.body.email && user.verified !== "True") {
            const updateduser = await User.updateOne({ _id: user._id }, {
                name: user.name,
                email: user.email,
                password: user.password,
                otp: user.otp,
                verified: "True"
            });
            res.json({success: true, user: user});
        }
        else
        {
            return res.json({success: success, "message" : "Invalid otp"})
        }
    } catch (error) {

        return res.json({success: success, error: error});
    }
})
//forgot password
router.post("/forgotpassword", async (req, res) => {
    let success = false; 
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user.verified === "True" && user.forgot === 'false') {
            const newotp = Math.round(Math.random() * 900000);
            const updateduser = await User.updateOne({ _id: user._id }, {
                name: user.name,
                email: user.email,
                password: user.password,
                otp: newotp,
                verified: "True",
                forgot: "True"
            });
            res.json({success: true, otp: newotp });
        }
        else {
            res.send({success: success, "error": "Please verify yourself" });
        }
    }
    catch (error) {
        return res.status(400).send({success: success, error: error });
    }
})
router.post('/newpassword', async (req, res) => {
    let success = false;
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user.verified === "True" && user.otp === req.body.otp && user.forgot === "True") {
            const salt = await bcrypt.genSalt(10);
            const secpass = await bcrypt.hash(req.body.password, salt);
            const updateduser = await User.updateOne({ _id: user._id }, {
                name: user.name,
                email: user.email,
                password: secpass,
                otp: 0,
                verified: "True",
                forgot: "false"
            });
            res.status(200).send({success: true, "message": "Password Changed Successfully" })
        }
    }
    catch (error) {
        return res.status(400).send({success, error});
    }
})
// Login
router.post('/loginstud', [
    body('reg_no').exists(),
    body('password').exists()
], async (req, res) => {
    const success = false;
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    const { reg_no, password } = req.body;
    try {
        let user = await User.findOne({ reg_no });
        if (!user) {
            return res.status(404).json({success: success, error: "Please enter your valid credentials" });
        }
        const passwordcompare = await bcrypt.compare(password, user.password);
        if (!passwordcompare) {
            return res.status(404).json({success: success, error: "Please enter your valid credentials" });
        }
        const data = {
            user: {
                id: user._id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        return res.status(200).json({ success: true, authtoken: authtoken});
    }
    catch (err) {

        console.log(err.message);
        return res.status(500).send("Internal Server Error");
    }
})

// Get login 
router.get('/getstud', fetchUser, async (req, res) => {

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