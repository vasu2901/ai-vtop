const express = require('express');
const fetchUser = require('../middleware/fetchUser');
const Marks = require('../Models/Marks');
const router = express.Router();
router.get('/', fetchUser, async (req, res) => {
    const mark = await Marks.find();
    res.json(mark);
})


module.exports = router;