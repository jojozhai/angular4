"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by zhailiang on 2017/2/18.
 */
var http = require("http");
var server = http.createServer(function (request, response) {
    response.end("Hello Node!");
});
server.listen(8000);
