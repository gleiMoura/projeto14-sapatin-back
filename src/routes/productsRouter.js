import { getAllProducts, getFeminineProducts, getMasculineProducts, getChildishProducts, putProductsInDB } from "../controllers/productController.js";
import Router from "express";

const productsRouter = Router();
productsRouter.post("/produtos", putProductsInDB)
productsRouter.get("/produtos", getAllProducts);
productsRouter.get("/produtos/feminino", getFeminineProducts);
productsRouter.get("/produtos/masculino", getMasculineProducts);
productsRouter.get("/produtos/infantil", getChildishProducts);

export default productsRouter;