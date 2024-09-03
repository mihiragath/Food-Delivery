const { body } = require('express-validator');

const profilevalidator = [
    body('First_Name').notEmpty().withMessage('First_Name cannot be empty.'),
    body('Last_Name').notEmpty().withMessage('last_name cannot be empty.'),
    body('DOB').notEmpty().withMessage('DOB cannot be empty.'),
    body('Gender').notEmpty().withMessage('gender cannot be empty.'),
    body('Image').notEmpty().withMessage('image cannot be empty.')
];

module.exports = {
    profilevalidator
};
