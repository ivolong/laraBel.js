const path = require("path")
const fs = require("fs")

module.exports = {
    data: {},
    
    view_uri: null,
    
    file: function (file_uri) {
        this.view_uri = __dirname + "/../views/" + file_uri
        return this
    },
    
    with: function (new_data) {
//         for (property in process.env) {
//             this.data[property] = process.env[property]
//         }
        
        this.data = Object.assign(process.env, this.data)
        this.data = Object.assign(new_data, this.data)
        return this
    },
    
    send: function (response) {
        fs.readFile(path.resolve(this.view_uri), "utf8", (error, html) => {
            if (error) {
                return response.status(400).send("View not found")
            }
            
            for (property in this.data) {
                html = html.replace(
                    '{{ ' + property + ' }}',
                    this.data[property]
                )
            }
            
            return response.send(html)
        })
    },
}
