const User = require('../models/user'); // Import your User model

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Find the user by email in the MongoDB database
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).send("Unauthorized");
        }

        if (user.password !== password) {
            return res.status(401).send("Unauthorized");
        }

        if (!req.user) {
            req.user = {};
        }

        req.user.email = user.email;
        req.user.id = user._id;
        req.user.name = user.name;
        next();
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

const register = async (req, res, next) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    const usern = new User({
        name, email, password
    });
    console.log(usern);
    try {
        const newUser = await usern.save();
        next();
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).send({ error: 'User with given name or email already exists.' });
        } else if (error.name = 'ValidatorError') {
            res.status(400).send({ error: 'unique username or email' })
        }
    }
}
module.exports = { login, register };
