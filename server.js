const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT

app.get('/', function (request, response) {
    response.sendFile(path.join('/index.html'))
})

app.listen(port, () => console.log(`Server listening to port ${port}`))
