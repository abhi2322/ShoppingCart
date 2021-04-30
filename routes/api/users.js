const route=require('express').Router()
const User=require("../../db").User

route.get('/',(req,res)=>{

    User.findAll()
    .then((users)=>{
        res.status(200).send(users)
    })
    .catch((err)=>{
        res.status(500).send({
            error:"Could not retrive users"
        })
    })
})
route.post('/',(req,res)=>{
    User.create({
        name:req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(501).send({
            error:"Could not add new user"
        })
    })
})

exports= module.exports = route