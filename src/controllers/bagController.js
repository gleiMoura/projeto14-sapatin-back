import chalk from "chalk";
import db from "./db.js"

export async function putProductInBag(req, res) {
    const product = req.body;
    const array = [req.body];

    try {
            const existProduct = await db.collection("userbag").findOne(product);
            if (existProduct) return res.sendStatus(409);

            await db.collection("userbag").insertOne(product);
            res.send(product).status(201);
    } catch (e) {
        res.sendStatus(500);
        console.log(chalk.red("Algo deu errado no servidor: " + e));
    }
}