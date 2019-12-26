
const express = require ('express');
const userRoute = express.Router();
const uuid=require('uuid/v4');
const config =require('../../config')
const knex = require('knex')(config.getDbDetails);


userRoute.get('/',(req,res)=>{
    res.json("user Api is work properly");
});


userRoute.post('/signup',(req,res) =>{

    const {email,name,password} =req.body;

    knex.transaction(trx => {
        trx.insert({ 
            uuid:uuid(),
            email:email,
            name:name,
            password:password
        }).into('users').returning('uuid').then(uuid => {
            res.json({
                uuid:uuid[0],
            })
        }).then(trx.commit)
        .catch(err => {
            console.log(err)
            trx.rollback
        })
    })
    
})


userRoute.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    knex.select().from('users').andWhere('email','=',email).andWhere('password','=',password).returning('*').then(function(data){

        res.json(data);
        // res.json({
            
        //     uuid:data[0].uuid,
        //     name:data[0].name,
        //     email:data[0].email,
        //     password:data[0].password
        // })
    }).catch(err=>{
        console.log(err)
        //res.json({status:false , messages: "email and password is incorrect"})

    })
        
})  



userRoute.get('/all', function(req, res) {
    knex.select().from('users').then(function(data) {
        res.send(data);
    });
});



module.exports = userRoute;