
// file to get 2 routes
// 1st: will send addres,,in return for which we will get that particular address lat and lang
// 2nd: will send two address & will get distance and duration between them
// for above 2 funtions, we are using service function getAddressCoordinates

import axios from 'axios'

export async function getAddressCoordinates(address) {

    const apikey = process.env.GOOGLE_MAPS_API
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apikey}`
    try {
        const response = await axios.get(url)
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location
            return {
                lat: location.lat,
                lng: location.lng
            }
        } else {
            throw new Error('Error fetching coordinates from Google Maps API')
        }
    } catch (error) {
        console.error('Error in getAddressCoordinates:', error)
        throw error
    }
}

export async function getDisatnceAndTime(origin, destination) {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required')
    }

    const apikey = process.env.GOOGLE_MAPS_API
    //post getting api key, we call axios to make get request to google api.
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apikey}`

    try {
        const response = await axios.get(url)
        if (response.data.status === 'OK') {
            if (response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No route found between the specified locations')
            }
            return response.data.rows[0].elements[0]
        } else {
            throw new Error('Error fetching distance & time from Google Maps API')
        }
    }
    catch (error) {
        console.error('Error in getDistaneAndTime:', error)
        throw error
    }
}

export async function getAddressSuggestions(input) {
    if (!input) {
        throw new Error('Input is required')
    }

    const apikey = process.env.GOOGLE_MAPS_API

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apikey}`

    try {
        const response = await axios.get(url)
        if (response.data.status === 'OK') {
            return response.data.predictions
        } else {
            throw new Error('Error fetching suggestions from Google Places API')
        }
    } catch (error) {
        console.error('Error in getAddressSuggestions:', err)
        throw error
    }
}
