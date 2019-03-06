var express = require('express')
var app = express()

 app.get('/home', function(req, res, next){
     res.sendFile("home.ejs", {"root":__dirname});
   
 })


app.get('/home', function(req, res, next) {
   
    req.getConnection(function(error, conn){
        conn.query('SELECT * FROM pages', function(err, rows, field){
            if(err){
                res.send(err);
            } else { 
                res.render('home.ejs');
            }
        })
    })
})

module.exports = app;