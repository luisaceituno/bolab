/// <reference path="./typings.d.ts" />

var express = require("express");
var app = express();

function helloWorld(request, response){
    response.send("Hello World");
}

app.get('/', helloWorld);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = {
    helloWorld: helloWorld
}