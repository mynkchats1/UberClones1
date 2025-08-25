const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long']
        }

    }, email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'] // Regular expression to validate email format.
    }, password: {
        type: String,
        required: true,
        select: false, // Exclude password from query results by default.
    }, socketId: {
        type: String,
    }, status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    }, vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'olor must be atleast 3 characters long']
        }, plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate number must be of atleast 3 characters']
        }, capacity: {
            type: Number,
            required: true,
            minlength: [1, 'Capacity must be atlease of 1 person']
        }, vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        }
    }, location: {
        lat: {
            type: Number,
        }, long: {
            type: Number
        }
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token
}
//above function generates JWT token for captain when they login/register

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
// above function compares password entered by captain with hashed password entered in DB

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10) //hashes password with 10 rounds of salting
}
// above function hashed password before saving it to DB

const captainModel = mongoose.model('captain', captainSchema)

module.exports = captainModel