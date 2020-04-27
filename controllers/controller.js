const controller = {
    index: function (request, response) {
        return response.send(process.env.app_name)
    }
}

module.exports = controller
