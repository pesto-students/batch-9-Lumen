# Lumen Server

### Folder Structure
The latest folder structure for the application is:
```
+-- src (source code for server)
|    |+-- _tests (contains test)
|    |+-- configs (config files for application)
|    |+-- controller (contains different types of controller eg: api, views)
|    |    |+-- api (contains api controllers)
|    |+-- routes (route files for application eg: '/home' route, '/user' route)
|    |     |+-- rest (contains all rest routes)
|    |+-- services (services for application eg: user api service, user model service)
|         |+-- user (services for user, eg: user api service, user model service )
--index.js
```

### REST API structure

We are following the versioned api structure eg: GET: https://example.com/api/v1/user/health

`/<typeOfRequest>/<versionOfAPI>/<specificController>/< ...rest of the path>`

### Flow of the API

- The `index.js`  is responsible for starting the server. The server will be started with the use of port set in environment variables.

- Any route that is being requested is forwarded to the routes folder and its `index.js` will send the request to the type(eg: /api, /view, /render, /page) of route that is being requested.

- The requests response will be forwarded by the subsequent route. Check the documentation [here](src/routes/README.md) to see the flow of the rest of the API.

- The response will be send by the subsequent path of the api.


## APIs available

- REST APIs [here](src/controller/apis/)