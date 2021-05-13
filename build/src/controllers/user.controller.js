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
const user_service_1 = __importDefault(require("../services/users/user.service"));
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield user_service_1.default.create(req.body);
                return res.status(200).json({ message: 'Create User Successfuly', data: response });
            }
            catch (error) {
                return res.status(400).json({ message: 'Error' });
            }
        });
    }
}
exports.default = new UserController();
