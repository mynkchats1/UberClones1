const blacklistTokenModel = require('../models/blacklistToken.model')
const captainModel = require('../models/captain.model')
const captainService = require('../services/captain.service')
const { validationResult } = require('express-validator')

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { fullname, email, password, vehicle } = req.body

    //below code checks if captain with existing mail exists or not
    const isCaptainAlreadyExists = await captainModel.findOne({ email })
    if (isCaptainAlreadyExists) {
        return res.status(400).json({ message: 'Captain with this email already exists' })
    }

    const hashedPassword = await captainModel.hashPassword(password)
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    }) //above function creates a captain in DB if all validations pass.

    const token = captain.generateAuthToken()

    res.status(201).json({ token, captain })
}

module.exports.loginCaptain = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }  //above code checks if there's any validation error in request body.
    // if errors are present, it returns 400 status code with error message.

    const { email, password } = req.body

    const captain = await captainModel.findOne({ email }).select('+password')
    // above code checks if captain with provided email exits in DB or not, if it exits 
    // both captain and password are returned. if not, below code is executed. 

    if (!captain) {
        return res.status(400).json({ message: 'Invalid email or password' })
    }

    //if we get password, its compared using below code
    const isMatch = await captain.comparePassword(password)
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' })
    }

    //if password matches, token is generated using below code
    const token = captain.generateAuthToken()
    // below codes sets token in cookie and sends token and captain details in response.
    res.cookie('token', token)
    const captainData = captain.toObject()
    delete captainData.password
    res.status(200).json({ token, captain: captainData })
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json({ captain: req.captain })
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]// provides token from req.cookies.token 
    await blacklistTokenModel.create({ token })
    res.clearCookie('token')

    res.status(200).json({ message: 'Logout Successfully' })
}
