import { getAllProducts, getFeminineProducts, getMasculineProducts, getChildishProducts, getAdidasProducts, getNikeProducts ,getVansProducts, putProductsInDB } from "../controllers/productController.js";
import Router from "express";

const productsRouter = Router();
productsRouter.post("/produtos", putProductsInDB)
productsRouter.get("/produtos", getAllProducts);
productsRouter.get("/produtos/feminino", getFeminineProducts);
productsRouter.get("/produtos/masculino", getMasculineProducts);
productsRouter.get("/produtos/infantil", getChildishProducts);
productsRouter.get("/produtos/adidas", getAdidasProducts);
productsRouter.get("/produtos/vans", getVansProducts);
productsRouter.get("/produtos/nike", getNikeProducts);



export default productsRouter;