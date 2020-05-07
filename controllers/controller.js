const viewer = require(__dirname + "/../framework/viewer.js")

const controller = {
    index: function (request, response) {
        return viewer.file("index.html").send(response)
    },
}

module.exports = controller
