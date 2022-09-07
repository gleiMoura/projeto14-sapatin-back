import { doRegister } from "../controllers/registerController.js";
import { validateRegister } from "../middlewares/registerMiddleware.js";
import { Router } from "express"

const registerRouter = Router();
registerRouter.post("/register", validateRegister, doRegister);


export default registerRouter;