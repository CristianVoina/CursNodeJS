"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name: {
        type:String,
        required:true,
        unique:false
    }
}, {timestamps: () => new Date().getTime()});

module.exports = mongoose.model('user', userSchema, 'users');