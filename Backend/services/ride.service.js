const rideModel = require('../models/ride.model')
const mapService = require('./maps.service')

//below function creates rider, if validation is not met, creates new rider.
module.exports.createRide = async ({
    user, origin, destination, fare,
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

//service function to calculate based om origin & destination
async function getFare(origin, destination) {
    if (!origin || !destination) {
        throw new Error('Origin & Destination are required to calculate fare')
    }
    const distanceTime = await mapService.getDisatnceAndTime(origin, destination) //in metres
}