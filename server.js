const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('big yeet'))

app.listen(port, () => console.log(`Server listening to port ${port}`))
