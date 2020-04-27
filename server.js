const express = require("express")
const app = express()
const port = process.env.PORT
const routes = require(__dirname + "/routes.js")

const server = require("http").createServer(app)

server.listen(port, () => console.log(`Server listening to port ${port}`))
