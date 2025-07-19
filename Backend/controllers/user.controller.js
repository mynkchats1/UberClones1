const userModel = require('../models/user.model')
const userService = require('../services/user.service')
const { validationResult } = require('express-validator')

module.exports.registerUser = async (req, res, next) => {
    //validations under user.routes.js are not enough, so if any actions is req to be performed 
    // its done in here.
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    // console.log(req.body)

    const { fullname, email, password } = req.body
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



