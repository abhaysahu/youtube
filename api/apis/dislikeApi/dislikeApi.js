
const express = require ('express');
const dislikeRoute = express.Router();

const config =require('../../config')
const knex = require('knex')(config.getDbDetails);


dislikeRoute.get('/',(req,res)=>{
    res.json("dislike Api is work properly");
});



module.exports = dislikeRoute;