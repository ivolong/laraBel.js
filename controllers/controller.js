const controller = {
    index: function (request, response) {
        return response.sendFile("~/views/index.html")
    }
}

module.exports = controller
