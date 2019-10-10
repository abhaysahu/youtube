
const express = require ('express');
const videoRoute = express.Router();

const config =require('../../config')
const knex = require('knex')(config.getDbDetails);


videoRoute.get('/',(req,res)=>{
    res.json("video Api is work properly");
});


//this api is use for post the video with imageUrl and VideoUrl

videoRoute.post('/videoPost',(req,res) =>{

    const {uuid, videoId, video_name, video_desc, date, image_url, video_url} =req.body;

    console.log(req.body);

    let nextDate=new Date();
    let videoDate=nextDate.getFullYear()+'-'+(nextDate.getMonth()+1)+'-'+nextDate.getDate();
    console.log(videoDate);

    knex.transaction(trx => {
        trx.insert({ 
            uuid: uuid,
            video_name: video_name,
            video_desc: video_desc,
            date: videoDate,
            image_url: image_url,
            video_url: video_url

        }).into('video').returning('*').then(function(data) {
            res.json({
                data                
            })
        }).then(trx.commit)
        .catch(err => {
            console.log(err)
            res.status(400);
            trx.rollback
        });
    });
    
});

//this api is use for get the particular;

videoRoute.post('/videoGet/:videoId', function(req, res) {

    const {uuid} =req.body;

    knex.select().from('video').andWhere('video_id', '=', req.params.videoId).then(function(data) {
        res.json(data);
    }).catch(err=>{
        res.json(err)
    });
});


videoRoute.post('/videoGet', function(req, res) {

    const {uuid} = req.body;
    
    console.log(uuid)

    knex.select().from('video').where('uuid', '=', uuid).then(function(data) {
        res.json(data);
    }).catch(err=>{
        res.json(err)
    });
});


//this api is use for update the particular video;

videoRoute.post('/videoUpdate/:videoId', function(req,res) {
    const {uuid, videoName, videoDesc, imageUrl, videoUrl} =req.body;

    let nextDate=new Date();
    let videoDate=nextDate.getFullYear()+'-'+(nextDate.getMonth()+1)+'-'+nextDate.getDate();
    console.log(videoDate);

    knex.transaction(trx => {
        trx.update({ 
            video_name: videoName,
            video_desc: videoDesc,
            date: videoDate,
            image_url: imageUrl,
            video_url: videoUrl

        }).into('video').returning('*').andWhere('uuid','=',uuid).andWhere('video_id','=',req.params.videoId).then(function(data) {
            res.json({
                data                
            });
        }).then(trx.commit)
        .catch(err => {
            console.log(err)
            trx.rollback
        });
    });
});


//this api is use for delete the particular video; 

videoRoute.post('/delete/:videoId', function(req, res) {

    const {uuid} =req.body;

    knex.raw(`delete from video where uuid='${uuid}' and video_id='${req.params.videoId}';`)
    .then(function(data) {
        
        res.json({messages: "record is delete successfully"})
    });
});



//this is use for get the all video;

videoRoute.get('/all', function(req, res) {
    knex.select().from('video').then(function(data) {
        res.send(data);
    });
});



module.exports = videoRoute;