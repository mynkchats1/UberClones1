const captainController = require('../controllers/captain.controller')
const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const authMiddleWare = require('../middleware/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('Please enter valid emial'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname must be atleast 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atleast 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate number must be atleast 3 characters long'),
    body('vehicle.capacity').isInt().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be car, motorcycle or auto')
],
    captainController.registerCaptain)  //Register route calls registerCaptain function from captainController.

router.post('/login', [
    body('email').isEmail().withMessage('Please enter valid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters long')

], captainController.loginCaptain) // Captain login route calles loginCaptain function from captainController.

router.get('/profile', authMiddleWare.authCaptain, captainController.getCaptainProfile)
//Profile route calls getCaptainProfile function from captainController

router.get('/logout', authMiddleWare.authCaptain, captainController.logoutCaptain)
// above code calls logoutCaptain controller 


module.exports = router