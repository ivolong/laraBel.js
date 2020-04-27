const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT

const controller = require(__dirname + '/controllers/controller.js')

app.get('/', function (request, response) {
    response.send(controller.staticController.index())
})

app.listen(port, () => console.log(`Server listening to port ${port}`))
