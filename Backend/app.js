const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const app = express()
const connectToDb = require('./db/db')
const userRoutes = require('./routes/user.routes')

connectToDb()

app.use(cors()) // in development we will accept request from all website, but in prod, domain alloted to cors will
// only accpet request & will block others
app.use(express.json()) // to parse json data from request body
app.use(express.urlencoded({ extended: true })) // to parse url encoded data from request body

app.get('/', (req, res) => {
    res.send("Hi MKJ, Veronica for you, always")
})
app.use('/users', userRoutes) // prefixes all orutes under user with /user


module.exports = app
