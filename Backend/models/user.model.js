const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First namew must be atleast 3 charaters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last namew must be atleast 3 charaters long']
        }
    }, email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be atleast 5 characters long']
    }, password: {
        type: String,
        required: true,  //minlength wont be req as will use jwt for authentication, for which we need 2 packages
        // bcrypt (fro hasing password) & jsonwebtoken(for generating token)
        select: false // prevents access of user password to driver.
    }, socketID: {
        type: String,  // used to live track captain and driver location and share with user.
    }
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_Secret) // generates token
    return token
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password) // comapres password with hashed password
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10) // hashes passwords with 10 rounds of salting
}

const userModel = mongoose.model('user', userSchema) // creates model with name 'user' & schema 'userSchema'

module.exports = userModel //exports userModel so that it can be used in other files