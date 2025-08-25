const express = require('express')
const router = express.Router()

//express-validator package is used that validates whether data is valid or not
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middleware/auth.middleware')

// creating register route
router.post('/register', [
    body('email').isEmail().withMessage('Enter valid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password atleast 6 characters long')
],
    userController.registerUser)

//creating login route
router.post('/login', [
    body('email').isEmail().withMessage('Enter valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password atleast 6 characters long')
],
    userController.loginUser)
//loginUser is a function thats defned in user.controller.js

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)
router.get('/logout', authMiddleware.authUser, userController.logoutUser) // route to Logout user.

module.exports = router