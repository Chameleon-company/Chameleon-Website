const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const User = require('../models/user');


router.post("/login", authController.login, (req, res, next) => {
    res.status(200).json({ message: "Login successful", user: req.user });
});

router.post('/register', async (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    const usern = new User({
        name, email, password
    });
    console.log(usern);
    try {
        const newUser = await usern.save();
        console.log("signed up");
        res.status(200).json({ message: "Sign up successful" });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).send({ error: 'User with given name or email already exists.' });
        } else if (error.name = 'ValidatorError') {
            res.status(400).send({ error: 'unique username or email' })
        }
    }

})

module.exports = router;