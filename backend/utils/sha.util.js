const crypto = require('crypto')


const SHA256 = (val) => {
    return crypto.createHash('sha256').update(val).digest('hex');
}

module.exports = {
    SHA256,
}