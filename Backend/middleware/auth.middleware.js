const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const captainModel = require('../models/captain.model')
const blackListTokenModel = require('../models/blacklistToken.model')

//creating middleware function to authenticate user
module.exports.authUser = async (req, res, next) => {
    // we require token in here to authenticate user, which can be received either from headers or from cookies.
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1] // 
    if (!token) {
        return res.status(401).json({ message: 'Unauthorised user' })
    }

    // if user saves token in local storage or shares with someone, then in order to avoid this
    // scenario, we need to check is token is blacklisted or not.
    const isBlacklisted = await blackListTokenModel.findOne({ token: token })
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorised user' })
    }


    //if we get token or authorised user, it goes into below try block
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) //verifies token with secret key
        const user = await userModel.findById(decoded._id) // finds user by id from decoded token
        //as only id is provided in generateAuthToken method, so when token is decoded, only id is available

        req.user = user
        return next() //if user is found, it goes to next middleware/controller
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorised user' })
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]
    //above code authenticates captain using token whcih is received either from headers or from cookies

    console.log(token)
    if (!token) {
        return res.status(401).json({ message: 'Unauthorised Captain' })
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token })
    // checks if token is blacklisted or not. If token is blacklisted, return 401 using below code.
    console.log(isBlacklisted)
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorised Captain' })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain // if captain is found, its assigned to req.captain.

        return next()  // if not present, it will not transfer control and server will remain active in loop.
    } catch (err) {
        console.log(err)
        res.status(401).json({ message: 'Unauthorised Captain' })
    }
}

