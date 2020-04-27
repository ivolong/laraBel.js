const controller = require(__dirname + '/controllers/controllers.js')

module.exports = function(app) {
    app.get('/', controller.index)
}
