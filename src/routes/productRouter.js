import { putProductInDB, putProductsInDB } from "../controllers/productController.js";
import { validateProduct } from "../middlewares/productMiddleWare.js";
import { Router } from "express";

const productRouter = Router();
productRouter.post("/produto", validateProduct, putProductInDB);
productRouter.post("/products", putProductsInDB);

export default productRouter;