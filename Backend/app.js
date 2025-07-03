const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors()) // in development we will accept request from all website, but in prod, domain alloted to cors will
// only accpet request & will block others

app.get('/', (req, res) => {
    res.send("Hi MKJ, Veronica for you, always")
})

module.exports = app
