require('rootpath')()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

const userApi = require('./users/user.controller')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// api routes
app.use('/users', userApi)

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port)
})