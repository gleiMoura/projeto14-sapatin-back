import { putProductInDB } from "../controllers/productController.js";
import { validateProduct } from "../middlewares/productMiddleWare.js";
import { Router } from "express"

const productRouter = Router();
productRouter.use(validateProduct);
productRouter.post("/produto", putProductInDB);


export default productRouter;