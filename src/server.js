import express from 'express';
import chalk from "chalk";
import cors from 'cors';
import db from "./db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.get("/myFinance", async (req, res) => {
  try {
    await mongoClient.connect();
    db = mongoClient.db(process.env.DATABASE);

    await db.collection("test").insertOne({teste: "será que vai dar certo?"});

    const teste = await db.collection("test").findOne({teste: "será que vai dar certo?"})
    res.send(teste);
  } catch (e) {
    res.sendStatus(500);
    console.log("algo deu errodo no servidor" + e);
  }

})

app.listen(process.env.PORT, () => {
  console.log(chalk.green(`Server running on port ${process.env.PORT}`))
})