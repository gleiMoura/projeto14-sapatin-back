import chalk from "chalk";
import db from "./db.js";
import dayjs from "dayjs";


export async function putProductInBag(req, res) {
    const product = req.body;

    const user = res.locals.user;

    try {
        const userProduct = await db.collection("products").findOne({ name: product.name });

        console.log(userProduct)

        if (user) {
            await db.collection("userBag").insertOne({
                email: user.email,
                name: userProduct.name,
                image: userProduct.image,
                price: userProduct.price,
                size: product.size,
                date: dayjs().format('DD/MM/YYYY')
            });
            res.send({
                email: user.email,
                name: userProduct.name,
                image: userProduct.image,
                price: userProduct.price,
                size: product.size,
                date: dayjs().format('DD/MM/YYYY')
            }).status(201);
        } else {
            res.sendStatus(409);
        }
    } catch (e) {
        res.sendStatus(500);
        console.log(chalk.red("Algo deu errado no servidor: " + e));
    }
}

export async function getBagProducts(req, res) {
    try {
        const email = req.body.email;

        const allProducts = await db.collection("userBag").find({ email }).toArray();
        const products = await db.collection("userBag").find().toArray()

        if (!allProducts) return res.sendStatus(401);

        res.send(products);
    } catch (error) {
        res.sendStatus(500);
        console.log(chalk.red("Algo deu errado no servidor (putsn): " + error));
    }
}