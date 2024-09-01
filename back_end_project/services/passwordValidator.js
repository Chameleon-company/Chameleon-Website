const validator = require('validator');

function validatePassword(password) {
    const isStrongEnough = validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    });
    
    return isStrongEnough;
}

module.exports = { validatePassword };
