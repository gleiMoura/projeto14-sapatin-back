import joi from "joi";
import chalk from "chalk";

export async function validateProduct(req, res, next) {
    try {
        const product = req.body;

        const schemaProduct = joi.object({
            name: joi.string().required(),
            image: joi.string().required(),
            price: joi.string().required(),
            brand: joi.string().required(),
            category: joi.string().required(),
            date: joi.string().required()
        });

        const validation = schemaProduct.validate(product);

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