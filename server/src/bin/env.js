module.exports = function() {
    //log
    const { error } = require('dotenv').config();
    if (error) {
        throw error;
    }
}