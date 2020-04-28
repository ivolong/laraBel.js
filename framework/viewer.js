const viewer = {
    send: function (response, file_uri) {
        return response.sendFile(path.join(__dirname + "/../views/" + file_uri))
    }
}

module.exports = viewer
