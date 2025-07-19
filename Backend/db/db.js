// file is to help connect with mongoose database, for which it needs url, that comes from env variable

const mongoose = require('mongoose')

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err))
}

module.exports = connectToDb