const controller = require(__dirname + "/controllers/controller.js")

const routes = function (app) {
    app.get('/', controller.index)
}

module.exports = routes
