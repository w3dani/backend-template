### NPM COMMANDS

Launch service: 

`npm run start`

Launch dev mongodb: 

`npm run start-it`

Stop dev mongodb:

`npm run stop-it`

### DEFINED ENDPOINTS

* `GET /examples`
List all example entities from mongodb

* `POST /examples`
Create a mock entity in mongodb

### DOCKER CONFIG

Build image with:
`docker build --tag your_tag .`

The defined env vars are:
* PORT: Server port. Default `3000`.
* MONGODB_HOST. MongoDB host. Default `localhost`.
* MONGODB_PORT. MongoDB port. Default `27017`.
* MONGODB_DATABASE. MongoDB database. Default `test`

Note: Remember to bind port to the same value as PORT.
Note 2: You should launch your mongodb and run the container against it. You should not use default MONGODB values.
