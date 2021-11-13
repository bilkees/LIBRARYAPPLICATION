const express = require('express');
// const booksRouter = express.Router();
const authorsRouter = express.Router();
function router1(nav){
    var authors=[
        {
            name:'barbera',
            language:'english',
           
            // img:"book1.jpg"
            img:"barbera.jpg"
        },
        {
            name:'JK Rowling',
            language:'english',
            
            img:"JK.jpg"
        },
        {
            name:'Basheer',
            language:'malayalam',
            
            img:"basheer.jpg"
        }
    ]
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title:'Library'   ,
    
            authors
        });
    });
    authorsRouter.get('/:id', function(req,res){
        const id=req.params.id
        res.render('author',{
            nav,
            title:'Library'   ,
            author:authors[id]
        });
    });
  return authorsRouter
}

module.exports=router1;