
const express = require ('express');
const likeRoute = express.Router();

const config =require('../../config')
const knex = require('knex')(config.getDbDetails);


likeRoute.get('/',(req,res)=>{
    res.json("like Api is work properly");
});



module.exports = likeRoute;