const viewer = require(__dirname + "/../framework/viewer.js")

const controller = {
    index: function (request, response) {
        return viewer.send(response, "index.html")
    },
    
    // about: function (request, response) {
    //    return viewer.send(response, "about.html")
    // }
}

module.exports = controller
