
//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

//Express Settings
app.use(express.json())
app.use(cors())



// INDEX 
app.get('/', (req, res) => {
    res.send('Hello World')
})

const booksRouter = require('./controllers/books_Router')
app.use('/books', booksRouter)



// LISTEN
app.listen(process.env.PORT)