const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const db = "mongodb://localhost";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.log("Mongo connect error "+ err);
    }
});

router.get('/', function(req, res){

    res.send('api works');

});

module.exports = router;