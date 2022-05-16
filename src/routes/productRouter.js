import { putProductInDB } from "../controllers/productController.js";
import { validateProduct } from "../middlewares/productMiddleWare.js";
import { Router } from "express";

const productRouter = Router();
productRouter.post("/produto", validateProduct, putProductInDB);

export default productRouter;