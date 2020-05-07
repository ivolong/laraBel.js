const controller = require(__dirname + "/controllers/controller.js")

module.exports = function (app) {
    app.get('/', controller.index)
}
