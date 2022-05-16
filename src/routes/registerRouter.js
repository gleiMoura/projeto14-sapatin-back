import { doRegister } from "../controllers/registerController.js";
import { validateRegister } from "../middlewares/registerMiddleWare.js";
import { Router } from "express"

const registerRouter = Router();
registerRouter.post("/register", validateRegister, doRegister);


export default registerRouter;