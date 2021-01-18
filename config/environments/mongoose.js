"use strict"

const mongoose = require('mongoose');

module.exports = {
    initMongoose: initMongoose
}

function initMongoose(){
    mongoose.connect('mongodb://localhost:27017/mydb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error', function(err){
        console.log('err', err);
    });

    db.once('open', function(){
        console.log('connected to mongodb');
    });

    //process.on('SIGINT', cleanup);
}