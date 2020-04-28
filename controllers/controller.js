const controller = {
    index: function (request, response) {
        return response.sendFile(__dirname + "../views/index.html")
    }
}

module.exports = controller
