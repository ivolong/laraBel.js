# bMVC.js

<p>So basic that the only thing I've done so far the the controller.</p>

# Registering routes

<p>Declare in the format:</p>
```javascript
app.method("/uri", controllerName.function)
```

<p>For example:</p>
```javascript
app.get("/about", controller.about)
```

# Creating controllers

<p>The start controller `controller.js` is fine for a simple website with only a few pages but for organisation and efficiency multiple may be useful for separating tasks of a different nature.</p>

<p>Create a controller file in `/controllers/` and follow the structure of the existing controller.</p>

<p>Declare the controller in `routes.js` so that it can be used:</p>
```javascript
const nameOfController = require(__dirname + "/controllers/nameOfController.js")
```

<p>Call the controller's function in the router:</p>
```javascript
app.get("/account/log-in", accountController.getLogin)
```
