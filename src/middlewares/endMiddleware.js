import joi from "joi";
import chalk from "chalk";

export async function validateEndShopp(req, res, next) {
    try {
        const data = req.body;

        const userSchema = joi.object({
            name: joi.string().required(),
            cep: joi.string().required(),
            street: joi.string().required(),
            city: joi.string().required(),
            state: joi.string().required()
        });

        const validation = userSchema.validate(data);

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