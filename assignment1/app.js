var express = require('express')
var app = express()

var mysql = require('mysql')

var myConnection = require('express-myconnection')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')
var methodOverride = require('method-override')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(expressValidator())

var config = require('./config')
var dbOptions = {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    port: config.database.port,
    database: config.database.db
}
app.use(myConnection(mysql,dbOptions,'pool'))
app.get('/')
var index = require('./routes/index')
app.use('/',index)
app.listen(3000,function(){
    console.log('server running at port 3000: http:127.0.0.1:3000')
})


