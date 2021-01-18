"use strict"

const express = require('express');
const app = express();
//const helprCtrl = require('./app/helpers');
const config = require('./config/index');
const ctrl = require('./config/express');

ctrl.initExpress(app);

require('./config/routes').initRoutes(app);
require('./config/environments/mongoose').initMongoose();

app.listen( config.PORT, function () {
    console.log(`App is running on port ${config.PORT}`)
});