import {Router} from "express";
import productRouter from "./productRouter.js";
import productsRouter from "./productsRouter.js";
import loginRouter from "./loginRouter.js";
import registerRouter from "./registerRouter.js"
import bagRouter from "./bagRouter.js";
import endRouter from "./endRouter.js";

const router = Router();
router.use(productsRouter);
router.use(bagRouter);
router.use(loginRouter);
router.use(productRouter);
router.use(registerRouter);
router.use(endRouter);
export default router;