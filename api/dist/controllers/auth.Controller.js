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
exports.Profile = exports.SignIn = exports.SignUp = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
//register
exports.SignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //saving a new user
    const user = new user_1.default({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    user.password = yield user.encryptPassword(user.password);
    const saveUser = yield user.save();
    //create token
    const token = jsonwebtoken_1.default.sign({ _id: saveUser._id }, process.env.TOKEN_SECRET || "token-secret");
    res.header("auth-token", token).json(saveUser);
});
//login
exports.SignIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userSign = yield user_1.default.findOne({ email: req.body.email });
    if (!userSign)
        return res.status(400).json("wrong e-mail or password");
    const correctPassword = yield userSign.validatePassword(req.body.password);
    if (!correctPassword)
        return res.status(400).json("invalid password");
    const token = jsonwebtoken_1.default.sign({ _id: userSign._id }, process.env.TOKEN_SECRET || "token-secret", {
        expiresIn: 60 * 60 * 24,
    });
    res.header("auth-token", token).json(userSign);
});
//data user
exports.Profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userProfile = yield user_1.default.findById(req.userId, { password: 0 });
    if (!userProfile)
        return res.status(400).json("user not found");
    res.json(userProfile);
});
//# sourceMappingURL=auth.Controller.js.map