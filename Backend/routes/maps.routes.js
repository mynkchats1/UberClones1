const express = require('express')
const router = express.Router()

//controller is required to authenticate user in order to use google api.
const authMiddleWare = require('../middleware/auth.middleware')
const mapController = require('../controllers/map.controller')
const { check, query } = require('express-validator')

router.get(
    '/get-coordinates',  //when running on postman, intially we get "Unauthorised user" error as we havent sent token in user header.
    // above helps to get lat & long of any address that send in query parameter. 
    query('address').isString().isLength({ min: 3 }),
    authMiddleWare.authUser,
    mapController.getCoordinates
)

// route to et distance/time between 2 addresses
router.get(
    '/get-distance-time',
    query('origin').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({ min: 3 }),
    authMiddleWare.authUser, //only autheticated user can access this api
    mapController.getDistanceAndTime //controller function to get distance and time between 2 addresses.
)

// route to give suggestions for address
// first route is created, then controller function is created, then service function is created.
router.get(
    '/get-suggestions',
    query('input').isString().isLength({ min: 3 }),
    authMiddleWare.authUser,
    mapController.getSuggestions
)

module.exports = router 