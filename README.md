# bMVC.js

So basic that the only thing I've done so far is the controller.

## Registering routes

Declare in the format:

	app.method("/uri", controllerName.function)

For example:

	app.get("/account/log-in", accountController.getLogin)

## Creating controllers

The start controller `controller.js` is fine for a simple website with only a few pages but for organisation and efficiency multiple controllers may be useful for separating tasks of a different nature.

Create a controller file in `/controllers/` and follow the structure of the existing controller:

	const viewer = require(__dirname + "/../framework/viewer.js")

	const accountController = {
	    getLogin: function (request, response) {
		return viewer.send(response, "log-in.html")
	    },
	}

	module.exports = accountController

Declare the controller in `routes.js` so that it can be used:

	const nameOfController = require(__dirname + "/controllers/accountController.js")
