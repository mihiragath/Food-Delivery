const { body } = require('express-validator');

const login = [
    body('Email').notEmpty().withMessage('Email cannot be empty.').isEmail().withMessage('Please enter correct email address.'),
    body('Password').notEmpty().withMessage('Password cannot be empty.')
];

module.exports = login
