var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');

app.use(compression());

app.use(express.static(path.join(__dirname, "public")));

app.get('*', function(req,res){
    res.sendFile(path.join(__dirname, "public/index.html"))
});

var port = process.env.PORT || 5678;

app.listen(port, function(){
    console.log('Production Express server running at '+ port)
});