import { doLogin } from "../controllers/loginController.js";
import { validateLogin } from "../middlewares/loginMiddleWare.js";
import { Router } from "express"

const loginRouter = Router();
loginRouter.use(validateLogin);
loginRouter.post("/login", doLogin);


export default loginRouter;