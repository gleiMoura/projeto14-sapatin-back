import {Router} from "express";
import productRouter from "./productRouter.js";
import productsRouter from "./productsRouter.js";
import loginRouter from "./loginRouter.js";
import registerRouter from "./registerRouter.js"

const router = Router();
router.use(productsRouter);
router.use(loginRouter);
router.use(registerRouter);
router.use(productRouter);
export default router;