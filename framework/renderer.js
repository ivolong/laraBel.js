function escapeCharacters (text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    }

    return text.replace(/[&<>"']/g, function (m) {
        return map[m]
    })
}

module.exports = {
    html = null,
    data = null,
    
    render: function (html, data) {
        this.data = data
        this.html = html
        return this.html.variables()
    },
    
    variables: function () {
        for (property in this.data) {
            this.html = this.html.replace(
                '{{ ' + property + ' }}',
                escapeCharacters(this.data[property])
            )
                
            html = html.replace(
                '{!! ' + property + ' !!}',
                this.data[property]
            )
        }
        
        return this.html
    },
}
