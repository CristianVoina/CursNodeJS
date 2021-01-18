"use strict"

const path = require('path');

module.exports = {
    initRoutes:initRoutes
}

function initRoutes(app){
    console.log('__dirname', __dirname);
    const routesPath = path.join(__dirname,'../app/routes');
    const routes = ['users'];

    routes.forEach(function(route){
        console.log("route",route);
        app.use(require(`${routesPath}/${route}`));
    })
}