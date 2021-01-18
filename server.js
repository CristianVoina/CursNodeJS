"use strict"

const express = require('express');
const app = express();
//const helprCtrl = require('./app/helpers');
const config = require('./config/index');
const ctrl = require('./config/express');

ctrl.initExpress(app);

require('./config/routes').initRoutes(app);
require('./config/environments/mongoose').initMongoose();
require('./config/environments/errorhandler').handlerEroare(app);

app.all('*', function(req, res, next){
    console.log("ultima ruta");
    res.json({status: 'fail',
        message: `Can't find ${req.url} on this server`
    })
});



app.listen( config.PORT, function () {
    console.log(`App is running on port ${config.PORT}`)
});