const express = require('express')
const app = express()
const route = express.Router()
const path = require('path')
const port = process.env.PORT

// app.get('/', function (request, response) {
//     response.sendFile(path.join(__dirname + '/index.html'))
// })

route.get('/', function (req, res) {
  res.send('big yeet');
})

module.exports = router

app.listen(port, () => console.log(`Server listening to port ${port}`))
