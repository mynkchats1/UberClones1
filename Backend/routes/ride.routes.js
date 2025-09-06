//when user picks origin & destination, he creates his ride

const express = require('express');
const router = express.Router();

// validator for userID, origin, destination
const { body } = require('express-validator');

router.post('/create',
    body('userID').isString().isLength({ min: 24, max: 24 }).withMessage('Invalid userID'),
    body('origin').isString().notEmpty().withMessage('Origin is required'),
    body('destination').isString().notEmpty().withMessage('Destination is required'),
    // controller function to handle ride creation

)

module.exports = router;