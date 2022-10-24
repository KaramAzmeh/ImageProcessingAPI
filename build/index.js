"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
// define a route handler for the default home page
app.get('/api', function (req, res) {
    res.send('server working');
});
//start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:".concat(port));
});
