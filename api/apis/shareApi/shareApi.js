
const express = require ('express');
const shareRoute = express.Router();

const config =require('../../config')
const knex = require('knex')(config.getDbDetails);


shareRoute.get('/',(req,res)=>{
    res.json("share Api is work properly");
});



module.exports = shareRoute;