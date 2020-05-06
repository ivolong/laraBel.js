# bMVC.js

<p>So basic that the only thing I've done so far the the controller.</p>

# Registering routes

<p>Declare in the format:</p>
<code>app.method("/uri", controllerName.function)</code>

<p>For example:</p>
<code>app.get("/about", controller.about)</code>

# Creating controllers

<p>The start controller `controller.js` is fine for a simple website with only a few pages but for organisation and efficiency multiple may be useful for separating tasks of a different nature.</p>

<p>Create a controller file in `/controllers/` and follow the structure of the existing controller.</p>

<p>Declare the controller in `routes.js` so that it can be used:</p>
<code>const nameOfController = require(__dirname + "/controllers/nameOfController.js")</code>

<p>Call the controller's function in the router:</p>
<code>app.get("/account/log-in", accountController.getLogin)</code>
