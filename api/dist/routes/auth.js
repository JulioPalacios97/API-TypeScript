"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_Controller_1 = require("../controllers/auth.Controller");
const validateToken_1 = require("../libs/validateToken");
const router = express_1.Router();
router.post("/signup", auth_Controller_1.SignUp);
router.post("/signin", auth_Controller_1.SignIn);
router.get("/profile", validateToken_1.Token, auth_Controller_1.Profile);
exports.default = router;
//# sourceMappingURL=auth.js.map