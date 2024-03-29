import { doLogin } from "../controllers/loginController.js";
import { validateLogin } from "../middlewares/loginMiddleware.js";
import { Router } from "express"

const loginRouter = Router();
loginRouter.post("/login", validateLogin,doLogin);

export default loginRouter;