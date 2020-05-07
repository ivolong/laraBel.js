const path = require("path")

const viewer = {
    data: null,
    
    view: null,
    
    file: function (file_uri) {
        this.view = __dirname + "/../views/" + file_uri
        return this
    },
    
    with: function (new_data) {
        this.data = new_data 
        return this
    },
    
    send: function (response) {
        return response.sendFile(path.join(this.view))
    },
}

module.exports = viewer
