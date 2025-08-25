const mongoose = require('mongoose')

//below code creates a schema of blacklisted tokens with ttl(time to live) of 24 hours, after which 
// they will be automatically removed from db.
const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    }, createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // 
    }
})

module.exports = mongoose.model('BlackListToken', blacklistTokenSchema)