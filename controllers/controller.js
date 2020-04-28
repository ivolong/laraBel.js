const path = require("path")
const viewer = require(__dirname + "/../framework/viewer.js")

const controller = {
    index: function (request, response) {
        return viewer.send(response, "index.html")
    }
}

module.exports = controller
