
const express = require('express');

const app = express();


const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link: '/admin', name:'Add Book'
    },
    {
        link: '/addauthor', name:'Add Authors'
    },
    {
        link: '/login', name:'Login'
    },
    {
        link: '/signup', name:'Signup'
    }

    // {
    //     link: '/admin', name:'Login'
    // },
    // {
    //     link: '/admin', name:'Signup'
    // }
];
const booksRouter= require('./src/routes/bookRoutes')(nav);
const authorsRouter= require('./src/routes/authorRoutes')(nav);
const adminRouter= require('./src/routes/adminRoutes')(nav);
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);

const signupRouter = require('./src/routes/signupRoutes')(nav);

// const authorsRouter = require('./src/routes/authorRoutes')(nav);
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/addauthor', addauthorRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

// booksRouter.initialize(app);
// app.use('/books',booksRouter);
app.get('/',function(req,res){
    res.render("index",
    {
nav,
title:'Library'

    });
});

app.listen(4549);