"use strict"

module.exports = {
    handlerEroare:handlerEroare
}

function handlerEroare(app){
    app.use(function(err, req, res, next){
        console.log("middleware de erroare generica");
        res.json({eroarenr:"123",
            mesajeroare: err
        });
    });
}