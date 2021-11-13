const express = require('express');
const addauthorRouter =express.Router();
function router(nav){
    addauthorRouter.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title:'Library'
        })
    })
    addauthorRouter.get('/ad',function(req,res){
        res.send("Hey, Author is  added");
    })

    return addauthorRouter
}
module.exports=router;