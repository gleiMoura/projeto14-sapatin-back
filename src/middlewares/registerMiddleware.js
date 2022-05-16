import joi from "joi";
import chalk from "chalk";

export async function validateRegister(req, res, next) {
    try {
        const user = req.body;

        const userSchema = joi.object({
            name: joi.string().required(),
            email: joi.string().required(),
            password: joi.string().required(),
        });
        const validation = userSchema.validate(user);

        if (validation.error) {
            console.log(chalk.red(validation.error.details));
            return res.sendStatus(422);
        }

    } catch (e) {
        console.log(chalk.red("Algo deu errado em midleware/validateProduct: " + e));
        return res.sendStatus(500);
    }

    next();
}