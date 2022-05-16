import db from "./db.js";
import bcrypt from "bcrypt";

export async function doRegister(req, res) {
    const { name, email, password } = req.body;

    const passwordCrypt = bcrypt.hashSync(password, 10);

    try {
        const user = await db.collection("users").findOne({ email });
        
        if (user) {
            console.log(`User ${name} exist in database`);
            return res.sendStatus(409);
        } else {
            await db.collection("users").insertOne({ name, email, password: passwordCrypt });

            return res.sendStatus(201);
        }
    } catch (e) {
        res.sendStatus(500);
        console.error("Erro no servidor, " + e);
    }
}