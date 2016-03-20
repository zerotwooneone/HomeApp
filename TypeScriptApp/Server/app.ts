/// <reference path="typings/main.d.ts"/>

import http = require('http');
http.createServer(function (request:http.IncomingMessage, response:any) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('<!doctype html>\n<html lang="en">\n' +
        '\n<meta charset="utf-8">\n<title>Test web page on node.js</title>\n' +
        '<style type="text/css">* {font-family:arial, sans-serif;}</style>\n' +
        '\n\n<h1>Euro 2012 teams</h1>\n' +
        '<div id="content"><p>The teams in Group D for Euro 2012 are:</p><ul><li>England</li><li>France</li><li>Sweden</li><li>Ukraine</li></ul></div>' +
        '\n\n');
    response.end();
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');

import express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000, function () {
    var host: string = server.address().address;
    var port: number = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

