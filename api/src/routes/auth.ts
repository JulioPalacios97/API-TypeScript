import { Router } from "express";
import { SignUp, SignIn, Profile } from "../controllers/auth.Controller";
import { Token } from "../libs/validateToken";

const router: Router = Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);

router.get("/profile", Token, Profile);

export default router;
