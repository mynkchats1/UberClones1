const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')
const blackListTokenModel = require('../models/blacklistToken.model')

module.exports.registerUser = async (req, res, next) => {
    //validations under user.routes.js are not enough, so if any actions is req to be performed 
    // its done in here.
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // console.log(req.body)

    const { fullname, email, password } = req.body

    const isUserAlreadyExists = await userModel.findOne({ email })
    if (isUserAlreadyExists) {
        return res.status(400).json({ message: 'User already exists' })
    }
    const hashedPassword = await userModel.hashPassword(password)
    // password is never stored in plain text, its always hashed

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })
    const token = user.generateAuthToken()
    res.status(201).json({ token, user }) //
}

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body  //extracting email, password from req.body.

    const user = await userModel.findOne({ email }).select('+password') //find user by email
    // here select('+password') is used to provide access to user's password filed whcih by default is 
    // selected false under user.model.js 

    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isMatch = await user.comparePassword(password) // compares password with help of method 
    // comparePassword that is defined in user.model.js

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' })
    }

    const token = user.generateAuthToken()
    // res.cookie('token', token, {
    //     httpOnly: true, // cookie not accessible from client side javascript
    //     secure: process.env_NODE_ENV === 'production', //cookie only sent over HTTPS in production
    //     maxAge: 3600000 // cookies expire in 1 hour
    // })
    res.cookie('token', token)

    res.status(200).json({ token, user }) //sends token and user data as response. 
}

module.exports.getUserProfile = async (req, res, next) => {
    //create authUser middleware that will open profile page for respective user only
    // for other users it will return "unauthorised" error
    res.status(200).json(req.user) //return user data from req.user that is set in authorization middleware
}

module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token') // clears token cookie from browser
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    // gets token from cookies or headers
    await blackListTokenModel.create({ token }) // adds token to blacklist so that it cant be used again.
    res.status(200).json({ message: 'Logged out successfuly' })
}



