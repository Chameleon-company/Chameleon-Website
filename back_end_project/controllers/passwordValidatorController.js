const { validatePassword } = require('../services/passwordValidator');

exports.checkPasswordStrength = (req, res) => {
    const { password } = req.body;
    if (!validatePassword(password)) {
        return res.status(400).json({ error: 'Password does not meet the required criteria' });
    }
    res.status(200).json({ message: 'Password is strong' });
};

const passwordValidatorController = require('../controllers/passwordValidatorController');

router.post('/validate-password', passwordValidatorController.checkPasswordStrength);
