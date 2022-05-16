import joi from "joi";
import chalk from "chalk";
import db from "../controllers/db.js"

export async function validateBag(req, res, next) {
    try {
        const data = req.body;
        const { authorization } = req.headers;
        const token = authorization?.replace("Bearer ", "");

        const bagSchema = joi.object({
            name: joi.string().required(),
            size: joi.required()
        });

        const validation = bagSchema.validate(data);

        if (validation.error) {
            console.log(chalk.red(validation.error.details));
            return res.sendStatus(422);
        }

        if(!token) return res.sendStatus(401);

        const session = await db.collection("sessions").findOne({token});
        if(!session) return res.sendStatus(401);

        const user = await db.collection("users").findOne({_id: session.userId});
        if(!user) return res.sendStatus(401);

        delete user.password;

        res.locals.user = user;

        console.log(res.locals.user)

    } catch (e) {
        console.log(chalk.red("Algo deu errado em midleware/validateProduct: " + e));
        return res.sendStatus(500);
    }

    next();
}