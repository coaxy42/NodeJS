var express = require('express')
var app = express()
var ejs = require('ejs');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.ejs'));
});
app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.ejs'));
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});
app.get('/services', function(req, res) {
    res.sendFile(path.join(__dirname + '/services.html'));
});
app.get('/blog', function(req, res) {
    res.sendFile(path.join(__dirname + '/blog.html'));
});
app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});

module.exports = app;