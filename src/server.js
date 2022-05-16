import express from 'express';
import chalk from "chalk";
import cors from 'cors';
import router from "./routes/index.js"
import db from "./controllers/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(chalk.green(`Server running on port ${process.env.PORT}`))
});

db //show that database is working in node!!