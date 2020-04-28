const path = require("path")

function view (response, file_uri) {
    return response.sendFile(path.join(__dirname + "/../views/" + file_uri))
}

const controller = {
    index: function (request, response) {
        return view(response, "index.html")
    }
}

module.exports = controller
