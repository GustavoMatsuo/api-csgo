"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var weaponsController_1 = __importDefault(require("./components/weapons/weaponsController"));
var routes = express_1.default.Router();
var weapons = new weaponsController_1.default();
routes.get('/weapons/all', weapons.index);
routes.get('/weapons/:type', weapons.search);
routes.get('/weapons/list/:attribute', weapons.list);
exports.default = routes;
