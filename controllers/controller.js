const viewer = require(__dirname + "/../framework/viewer.js")

const controller = {
    index: function (request, response) {
        return viewer.file("index.html")
            .with({
                framework: "lara🅱️el.js"
            })
            .send(response)
    },
}

module.exports = controller
