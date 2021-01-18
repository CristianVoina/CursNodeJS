"use strict"

const express = require('express');
const router = express.Router();
const helprCtrl = require('../helpers');
const userCtrl = require('../controllers/users');
const isAdmin = true;


router.use(function(req,res,next){
    console.log('first mid', req.url);
    req.currentDate = helprCtrl.getCurrentDate();
    next();
})

router.use(function(req,res,next){
    console.log('second mid', req.url);
    //res.json({text:"Hello",date:req.currentDate});
    if(isAdmin == true){
        next();
    }
    else{
        res.send("User not Authorized!");
    }
})

router.post('/users', userCtrl.createUser//, 
    //function(req,res,next){
    //console.log('users route post', req.query);
    //console.log('json primit', req.body);
    //return res.json({text: 'Hello POST'});
//}
)

router.put('/users', function(req,res,next){
    console.log('users route put', req.query);
    return res.json({text: 'Hello PUT'});
})

router.get('/user', userCtrl.mid1, userCtrl.mid2, function(req, res, next){
    console.log('users route');
    res.send('Helllooo');
})

router.get('/getuser', userCtrl.getUser)
router.get('/getuserbyid/:userId', userCtrl.getUsersbyId)
router.get('/deleteuserbyid/:userId', userCtrl.deleteUsersbyId)

module.exports = router;