import db from "./db.js";

export async function endShopp(req, res) {
    const data = req.body;

    try {
        await db.collection("delivery").insertOne({ data });

        res.send(data);
    } catch (error) {
        res.sendStatus(500);
        console.log(chalk.red("Algo deu errado no servidor: " + e));
    }
}