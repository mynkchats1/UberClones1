const mapService = require('../services/maps.services')
const { validationResult } = require('express-validator')


// controller function to get any address coordinates(lat & long)
module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { address } = req.query

    try {
        const coordinates = await mapService.getAddressCoordinates(address)
        res.status(200).json(coordinates)
    } catch (error) {
        res.status(404).json({ message: 'Error fetching coordinates' })
    }
}

//controller function to get distance & time between any 2 addresses
module.exports.getDistanceAndTime = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { origin, destination } = req.query

        const distanceTime = await mapService.getDisatnceAndTime(origin, destination)

        res.status(200).json(distanceTime)

    } catch (error) {
        console.error('Error in getDistanceAndTime controller:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

//controller function to get address suggestions
module.exports.getSuggestions = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        const { input } = req.query  //input is fetched from query parameter.

        const suggestions = await mapService.getAddressSuggestions(input)
        // from that input, suggestions are fetched using service function.

        res.status(200).json(suggestions) //fetched suggestions are sent as response in json format.
    } catch (error) {
        console.error('Error in getSuggestions controller:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

