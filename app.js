import express from 'express';
import cors from 'cors';
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const mongoClient = new MongoClient(process.env.MONGO_URI);
let db;


app.get('/teste', async (req, res) => { 
    console.log("chamou");
    console.log(process.env.MONGO_URI);
    return res.sendStatus(200);
 });

app.listen(5000, () => {
    console.log("Listening on 5000")
  })