const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, () => console.log(`Server listening to port ${port}`))
