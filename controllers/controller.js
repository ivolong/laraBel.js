const viewer = require(__dirname + "/../framework/viewer.js")

module.exports = {
    index: function (request, response) {
        return viewer.file("index.html")
            .with({
                title: "Index"
            })
            .send(response)
    },
}
