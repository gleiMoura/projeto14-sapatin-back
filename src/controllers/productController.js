
export async function putProductInDB(req, res) {
    const product = req.body;

    const insertProduct = {
        image: product.image,
        price: product.price,
        size: product.size,
        brand: product.brand,
        category: product.category,
        date: dayjs().format("DD/MM/YYYY")
    };

    try {
        await db.collection("products").insertOne(insertProduct);
        res.send(insertProduct).status(201);

    } catch (e) {
        res.sendStatus(500);
        console.log(chalk.green("Algo deu errado no servidor: " + e));
    }
}