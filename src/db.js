import {MongoClient} from "mongodb";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

let db;
const mongoClient = new MongoClient(process.env.MONGO_URI);

try{
    await mongoClient.connect();
    db = mongoClient.db(process.env.DATABASE)
    console.log(chalk.green(chalk.green("Database is worging!")))
}catch (e){
    console.log(chalk.red("Database is not working, error: " + e));
}

export default db;