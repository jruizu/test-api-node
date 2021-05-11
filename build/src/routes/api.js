"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ApiRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/api/users_all', (req, res) => {
            res.status(200).json({ users: ['Jose', 'Juan'] });
        });
    }
}
exports.default = new ApiRouter().router;
