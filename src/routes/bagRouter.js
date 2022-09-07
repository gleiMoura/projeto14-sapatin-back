import { putProductInBag, getBagProducts } from "../controllers/bagController.js";
import { validateBag } from "../middlewares/bagMiddleware.js";
import { deleteBagProducts } from "../controllers/bagController.js";
import { Router } from "express"

const bagRouter = Router();
bagRouter.post("/bag", validateBag, putProductInBag);
bagRouter.get("/bag", getBagProducts);
bagRouter.delete("/bag", deleteBagProducts);


export default bagRouter;