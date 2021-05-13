"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./database/connection"));
const api_1 = __importDefault(require("./routes/api"));
class ServerApp {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.route();
    }
    config() {
        var _a;
        this.app.set('port', (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000);
        this.app.use(cors_1.default());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
        // const sessionMiddleware = session({
        //   store: new RedisStore({}),
        //   secret: 'super secret word'
        // })
        // this.app.use(sessionMiddleware)
    }
    route() {
        this.app.use('/api', api_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default;
            console.log(`Server is running in port ${this.app.get('port')}`);
        }));
    }
}
const server = new ServerApp();
server.start();
exports.default = server;
