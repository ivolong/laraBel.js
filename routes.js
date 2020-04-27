const controller = require(__dirname + "/controllers/controller.js")
// const nameController = require(__dirname + "/controllers/nameController.js")

module.exports = function(app) {
    app.get('/', controller.index)
    // app.get("/about", nameController.about)
}
