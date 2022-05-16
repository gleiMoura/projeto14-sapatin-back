import { doRegister } from "../controllers/registerController.js";
import { validateRegister } from "../middlewares/registerMiddleWare.js";
import { Router } from "express"

const registerRouter = Router();
registerRouter.use(validateRegister);
registerRouter.post("/register", doRegister);


export default registerRouter;