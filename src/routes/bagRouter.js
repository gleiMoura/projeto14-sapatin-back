import { putProductInBag, getBagProducts } from "../controllers/bagController.js";
import { validateBag } from "../middlewares/bagMiddleWare.js";
import { Router } from "express"

const bagRouter = Router();
bagRouter.post("/bag", validateBag, putProductInBag);
bagRouter.get("/bag", getBagProducts);


export default bagRouter;