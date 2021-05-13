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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const app = app_1.default.app;
describe('GET /api/users_all', () => {
    it('respond with json containing list all users', (done) => __awaiter(void 0, void 0, void 0, function* () {
        yield supertest_1.default(app)
            .get('/api/users_all')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
        done();
    }));
});
// expect 200
describe('POST /api/user/ceate', () => {
    it('respond with json containing message sucess saved', (done) => __awaiter(void 0, void 0, void 0, function* () {
        yield supertest_1.default(app)
            .post('/api/user/create')
            .send({
            name: 'Jose Ruiz',
            email: 'joseurango@gmail.com',
            password: '12345'
        })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
        done();
    }));
});
