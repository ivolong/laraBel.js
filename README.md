# bMVC.js

So basic that the only thing I've done so far is the controller.

This is essentially a lightweight version of Laravel written in JavaScript.

## Routes

Declare in the format:

	app.method("/uri", controllerName.function)

For example:

	app.get("/account/log-in", accountController.getLogin)

## Controllers

The start controller `controller.js` is fine for a simple website with only a few pages but for organisation and efficiency multiple controllers may be useful for separating tasks of a different nature.

Create a controller file in `/controllers/` and follow the structure of the existing controller:

	const viewer = require(__dirname + "/../framework/viewer.js")

	const accountController = {
	    getLogin: function (request, response) {
		return viewer.file("log-in.html").send()
	    },
	}

	module.exports = accountController

Declare the controller in `routes.js` so that it can be used:

	const nameOfController = require(__dirname + "/controllers/accountController.js")
	
JavaScript code can be executed in the controllers to return variables which can then be passed into the view via and `Object` to be renderd by the server:

	return viewer.file("log-in.html").with({ variable: "value" }).send()
