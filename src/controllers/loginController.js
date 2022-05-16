
import chalk from "chalk";
import db from "./db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function doLogin(req, res) {
    const { email, password } = req.body;

    const user = await db.collection('users').findOne({ email });

    try {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = uuid();

            await db.collection("sessions").insertOne({
                userId: user._id,
                token
            });

            delete user.password,

            res.send({ name: user.name, email, token }).status(201);

            res.locals.user = user;
        } else {
            console.log(chalk.red(`User with ${email} does not exist in database: ${email}`));
            return res.sendStatus(409);
        }
    } catch (e) {
        res.sendStatus(500);
        console.error("Erro no servidor, " + e);
    }
}









