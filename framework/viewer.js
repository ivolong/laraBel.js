const path = require("path")

const viewer = {
    data: {},
    view: null,
    
    file: function (file_uri) {
        this.view = __dirname + "/../views/" + file_uri)
    },
    
    with: function (data) {
        this.data[data.key] = data.value 
    },
    
    send: function (response) {
        return response.sendFile(path.join(this.view))
    },
}

module.exports = viewer
