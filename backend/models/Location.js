const mongoose = require('mongoose');
const locationSchema = new mongoose.Schema({
    name: String,
    country: String,
    description: String
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location;