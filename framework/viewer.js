const path = require("path")
const fs = require("fs")

module.exports = {
    data: null,
    
    view_uri: null,
    
    file: function (file_uri) {
        this.view_uri = __dirname + "/../views/" + file_uri
        return this
    },
    
    with: function (new_data) {
        current_data = this.data
        this.data = {current_data, new_data} 
        return this
    },
    
    send: function (response) {
        fs.readFile(path.resolve(this.view_uri), "utf8", (error, html) => {
            if (error) {
                return response.status(400).send("View not found")
            }
            
            console.log(this.data)
	        
            for (property in this.data) {
                html = html.replace(
                    '{{ environment }}',
                    this.data[property]
                )
            }
            
            return response.send(html)
        })
    },
}
