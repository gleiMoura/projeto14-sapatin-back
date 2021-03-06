import chalk from "chalk";
import db from "./db.js";

export async function profileProduct(req, res) {
    const content = req.body;
    const { date } = req.body;
    const arrayDate = date.split("/");
    let day = parseInt(arrayDate[0]) + 7;
    let month = parseInt(arrayDate[1]);
    if (parseInt(day) > 31) {
        day = day - 31;
        month++
    }
    const deliveryDate = `${day}/${month}/${arrayDate[2]}`;

    try {
        const profile = await db.collection("profile").insertOne({ ...content, deliveryDate });
        res.send(profile);
    } catch (e) {
        res.sendStatus(500);
        console.log(chalk.red("Algo deu errado no servidor: " + e));
    }
}

export async function getProfileData(req, res) {
    const email = req.body;

    try {
        const shoppData = await db.collection("profile").find(email).toArray();
        if (!shoppData) return res.sendStatus(409);

        res.send(shoppData);
    } catch {
        res.sendStatus(500);
        console.log(chalk.red("Algo deu errado no servidor: " + e));
    }
}
