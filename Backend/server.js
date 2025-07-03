// server.js is entry point of our backend, thus in package.json, main is assigned with server.js


const http = require("http")
const app = require('./app')
const port = process.env.port || 3000

const server = http.createServer(app) // creates app server which was created in app.js

server.listen(port, () => {
    console.log(`Veronica is listening on port ${port}`);

}) //fixed port shouldnt be used, port should be from env variable, thus we need dotenv package