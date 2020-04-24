const express = require('express')
const port = process.env.PORT

express().get('/', (req, res) => res.send('big yeet'))

express().listen(port, () => console.log(`Server running`))
