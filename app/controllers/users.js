"use strict"

const User = require('../models/users')

module.exports = {
    mid1:mid1,
    mid2:mid2,
    createUser: createUser,
    getUser: getUser,
    getUsersbyId:getUsersbyId,
    deleteUsersbyId:deleteUsersbyId
}

function mid1 (req, res, next){
    console.log("mid 1");
    next();
}

function mid2 (req, res, next){
    console.log("mid 2");
    next();
}

function createUser(req, res, next){
    console.log('req.body', req.body);
    const user = new User(req.body);

    user.save(function(err,result){
        if(err){
            console.log('err', err);
        }
        
        return res.json(result);
    });

   // console.log('user', user);
    //return res.json({altceva:1});
}

function getUsersbyId(req, res, next){
    console.log('params', req.params);
    const {userId} = req.params;

    User.findById({_id: userId}, function (err, result){
        if(err){
            return res.json(err);
        }
        return res.json(result);
    });
}

function getUser(req, res, next){
    User.find(function(err, result){
        if(err){
            return res.json(err);
        }
        return res.json(result);
    });
}

function deleteUsersbyId(req, res, next){
    console.log('params', req.params);
    const {userId} = req.params;

    User.deleteOne({_id: userId}, function (err, result){
        if(err){
            return res.json(err);
        }
        return res.json(result);
    });
}