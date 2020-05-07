const path = require("path")
const fs = require("fs")

const renderer = require(__dirname + "/renderer.js")

module.exports = {
    data: {},
    view_uri: null,
    
    file: function (file_uri) {
        this.view_uri = __dirname + "/../views/" + file_uri
        return this
    },
    
    with: function (new_data) {
        this.data = Object.assign(process.env, this.data)
        this.data = Object.assign(new_data, this.data)
        return this
    },
    
    send: function (response) {
        fs.readFile(path.resolve(this.view_uri), "utf8", (error, html) => {
            if (error) {
                return response.status(500).send("View not found")
            }
            
            rendered = renderer.render(html, this.data)
            
            return response.send(rendered)
        })
    },
}
