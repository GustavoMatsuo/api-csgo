"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use(routes_1.default);
app.use(function (req, res) {
    res.status(404);
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }
});
exports.default = app;
