import chalk from "chalk";
import db from "./db.js"

export async function putProductInDB(req, res) {
    const product = req.body;

    try {
        const existProduct = await db.collection("products").findOne(product);
        if (existProduct) return res.sendStatus(409);

        await db.collection("products").insertOne(product);
        res.send(product).status(201);
    } catch (e) {
        res.sendStatus(500);
        console.log(chalk.red("Algo deu errado no servidor: " + e));
    }
}

export async function putProductsInDB(req, res) {
    const product = req.body;

    try {
        await db.collection("products").insertMany(product);
        res.send(product).status(201);
    } catch (e) {
        res.sendStatus(500);
        console.log(chalk.red("Algo deu errado no servidor: " + e));
    }
}

export async function getAllProducts(req, res) {
    try {
        const allProducts = await db.collection("products").find().toArray();
        res.send(allProducts).status(200);
    } catch (error) {
        console.log(chalk.red(`Algo errado no servidor para pegar os dados da API: ${error}`));
        res.sendStatus(500);
    }
}

export async function getFeminineProducts(req, res) {
    try {
        const feminine = await db.collection("products").find({ category: "feminino" }).toArray();
        res.send(feminine).status(200);
    } catch (error) {
        console.log(chalk.red(`Algo errado no servidor para pegar os dados da API: ${error}`));
        res.sendStatus(500);
    }
}

export async function getMasculineProducts(req, res) {
    try {
        const masculine = await db.collection("products").find({ category: "masculino" }).toArray();
        res.send(masculine).status(200);
    } catch (error) {
        console.log(chalk.red(`Algo errado no servidor para pegar os dados da API: ${error}`));
        res.sendStatus(500);
    }
}

export async function getChildishProducts(req, res) {
    try {
        const childish = await db.collection("products").find({ category: "infantil" }).toArray();
        res.send(childish).status(200);
    } catch (error) {
        console.log(chalk.red(`Algo errado no servidor para pegar os dados da API: ${error}`));
        res.sendStatus(500);
    }
}