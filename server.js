const express = require('express')
const php_express = require('php-express')({
    binPath: 'php'
})
const app = express()
const path = require('path')
const port = process.env.PORT

app.set('views', './views');
app.engine('php', php_express.engine);
app.set('view engine', 'php');
app.all(/.+\.php$/, php_express.router);

app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname + '/index.php'))
})

app.listen(port, () => console.log(`Server listening to port ${port}`))
