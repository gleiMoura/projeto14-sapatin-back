import { getAllProducts, getFeminineProducts, getMasculineProducts, getChildishProducts } from "../controllers/productController.js";
import Router from "express";

const productsRouter = Router();
productsRouter.get("/produtos", getAllProducts);
productsRouter.get("/produtos/feminino", getFeminineProducts);
productsRouter.get("/produtos/masculino", getMasculineProducts);
productsRouter.get("/produtos/infantil", getChildishProducts);

export default productsRouter;