/// <reference path="typings/main.d.ts"/>

import express = require('express');
var app = express();
import path = require('path');

app.get('/test', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));
});

app.get('/', function (req, res) {
    res.send('<!doctype html>\n<html lang="en">\n' +
        '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' +
        '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
        '\n\n<h1>Euro 2012 teams</h1>\n' +
        '<div id="content"><p>The teams in Group D for Euro 2012 are:</p><ul><li>England</li><li>France</li><li>Sweden</li><li>Ukraine</li></ul></div>' +
        '\n\n');
});

//app.get('/app', function (req, res) {
//    res.sendFile(path.join(__dirname + '/../TypeScriptApp/index.html'));
//});

app.use(express.static('../TypeScriptApp'));


var server = app.listen(3000, function () {
    var host: string = server.address().address;
    var port: number = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

