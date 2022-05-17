import chalk from "chalk";
import db from "./db.js";
import dayjs from "dayjs";

export async function profileProduct(req, res) {
    const content = req.body;
    const { date } = req.body;
    const arrayDate = date.split("/");
    let  day = arrayDate[0] + 7;
    let month = arrayDate[1];
    if(parseInt(day) > 31){
        day = parseInt(day) - 31;
        month = parseInt(month) + 1
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