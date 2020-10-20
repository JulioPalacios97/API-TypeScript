"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.Token = (req, res, next) => {
    const token = req.header("auth-token");
    if (!token)
        return res.status(400).json("Access denied");
    const data = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || "token-secret");
    req.userId = data._id;
    next();
};
//# sourceMappingURL=validateToken.js.map