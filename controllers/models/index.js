//Where we connect to Mongoose
require('dotenv').config()
const mongoose = require('mongoose')
const {Schema} = mongoose


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

const Book = require('./books.js')
module.exports = Book
