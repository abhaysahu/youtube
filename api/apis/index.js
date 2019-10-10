const express = require('express');
const apiRoute = express.Router();



const userRoute=require('./userApi/userApi');
const videoRoute=require('./videoApi/videoApi');
const commentRoute=require('./commentApi/commentApi');
const likeRoute=require('./likeApi/likeApi');
const dislikeRoute=require('./dislikeApi/dislikeApi');



apiRoute.use('/user', userRoute);
apiRoute.use('/video', videoRoute);
apiRoute.use('/comment', commentRoute);
apiRoute.use('/like', likeRoute);
apiRoute.use('/dislike', dislikeRoute);


module.exports=apiRoute;