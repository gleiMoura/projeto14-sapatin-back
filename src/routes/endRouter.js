import { endShopp } from "../controllers/endController.js";
import { validateEndShopp } from "../middlewares/endMiddleWare.js";
import { Router } from "express"

const endRouter = Router();
endRouter.post("/end", validateEndShopp, endShopp);

export default endRouter;