const path = require("path")

const controller = {
    index: function (request, response) {
        return response.sendFile(path.join(__dirname + "/../views/index.html"))
    }
}

module.exports = controller
