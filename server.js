const express = require("express")
const app = express()
const port = process.env.PORT

const server = require("http").createServer(app)
const routes = require(__dirname + "/routes.js")(app)

server.listen(port, () => console.log(`Server listening to port ${port}`))
