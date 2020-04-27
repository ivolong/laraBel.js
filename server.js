const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT
const routes = require(__dirname + '/routes.js')

app.listen(port, () => console.log(`Server listening to port ${port}`))
