import { doLogin } from "../controllers/loginController.js";
import { validateLogin } from "../middlewares/loginMiddleWare.js";
import { Router } from "express"

const loginRouter = Router();
loginRouter.post("/login", validateLogin,doLogin);

export default loginRouter;