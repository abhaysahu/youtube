
const express = require ('express');
const commentRoute = express.Router();

const config =require('../../config')
const knex = require('knex')(config.getDbDetails);


commentRoute.get('/',(req,res)=>{
    res.json("comment Api is work properly");
});



//this api is for post the comment the post;

commentRoute.post('/commentPost',(req,res) =>{

    const {uuid, videoId, comment} =req.body;

    knex.transaction(trx => {
        trx.insert({ 
            uuid: uuid,
            video_id: videoId,
            comment: comment

        }).into('comment').returning('*').then(function(data) {
            res.json({
                data                
            })
        }).then(trx.commit)
        .catch(err => {
            console.log(err)
            trx.rollback
        });

    });
    
});


//this api is for get the video;

commentRoute.post('/commentGet/:videoId', function(req, res) {

    const {uuid} =req.body;

    knex.select().from('comment').andWhere('uuid','=', uuid).andWhere('video_id', '=', req.params.videoId).then(function(data) {
        res.json(data);
    }).catch(err=>{
        res.json(err)
    })
})


//this api is for update the video;

commentRoute.post('/commentUpdate/:commentId', function(req,res) {
    const {uuid, videoId, comment} =req.body;

    knex.transaction(trx => {
        trx.update({ 
            comment: comment
        }).into('comment').returning('*').andWhere('uuid','=',uuid).andWhere('video_id','=',videoId).andWhere('comment_id','=',req.params.commentId).then(function(data) {
            res.json({
                data                
            })
        }).then(trx.commit)
        .catch(err => {
            console.log(err)
            trx.rollback
        })
    })
})




//this api is use for delete the comment;

commentRoute.post('/delete/:commentId', function(req, res) {

    const {uuid} =req.body;

    knex.raw(`delete from video where uuid='${uuid}' and video_id='${req.params.commentId}';`)
    .then(function(data) {
        
        res.json({messages: "record is delete successfully"})
    })

})




commentRoute.get('/all', function(req, res) {
    knex.select().from('comment').then(function(data) {
        res.send(data);
    });
});




module.exports = commentRoute;