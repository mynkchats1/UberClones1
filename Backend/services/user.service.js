const userModel = require('../models/user.model')


//below function creates user, if validation is not met, creates new user.
module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error('All fields are required') // if firsname, email & password is missing, we create new user using const.
    }
    const user = userModel.create({
        fullname: {
            firstname,
            lastname
        }, email,
        password
    })
    // const token = user.generateAuthToken()
    return user
}