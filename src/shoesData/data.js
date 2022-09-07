import db from "../controllers/db.js";
import chalk from "chalk";

export async function putProductsInDatabase() {
	const data = [
		{
			"name": "Tênis Nike Air (masculino)",
			"image": "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-zoom-superrep-2-masculino-CU6445-001-1.jpg",
			"price": "200.50",
			"brand": "nike",
			"category": "masculino"
		},
		{
			"name": "Tênis Nike Pegasus (masculino)",
			"image": "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-zoom-pegasus-38-masculino-CW7356-002-1.jpg",
			"price": "199.99",
			"brand": "nike",
			"category": "masculino"
		},
		{
			"name": "Tênis Adidas Ultimashow (masculino)",
			"image": "https://static.netshoes.com.br/produtos/tenis-adidas-ultimashow-masculino/26/NQQ-6927-026/NQQ-6927-026_zoom1.jpg?ts=1612440206&ims=544x",
			"price": "150",
			"brand": "adidas",
			"category": "masculino"
		},
		{
			"name": "Tênis Adidas GO (masculino)",
			"image": "https://i.zst.com.br/thumbs/12/36/39/774504532.jpg",
			"price": "130",
			"brand": "adidas",
			"category": "masculino"
		},
		{
			"name": "Tênis Vans Cool (masculino)",
			"image": "https://imgcentauro-a.akamaihd.net/900x900/96564102/tenis-vans-masculino-seldan-img.jpg",
			"price": "178.90",
			"brand": "vans",
			"category": "masculino"
		},
		{
			"name": "Tênis vans Zebr",
			"image": "https://i.zst.com.br/thumbs/12/34/1f/28829332.jpg",
			"price": "150.90",
			"brand": "vans",
			"category": "masculino"
		},
		{
			"name": "Tênis Nike Downshfter (feminino)",
			"image": "https://images.lojanike.com.br/1024x1024/produto/tenis-wmns-nike-downshifter-11-CW3413-500-1.jpg",
			"price": "190",
			"brand": "nike",
			"category": "feminino"
		},
		{
			"name": "Tenis Nike Tanjun",
			"image": "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-tanjun-DJ6257-001-3-31628872433.jpg",
			"price": "190",
			"brand": "nike",
			"category": "feminino"
		},
		{
			"name": "Tenis Adidas Hey Dude (feminino)",
			"image": "https://i.zst.com.br/thumbs/12/0/16/2068798534.jpg",
			"price": "200",
			"brand": "adidas",
			"category": "feminino"
		},
		{
			"name": "Tenis Adidas Fill (feminino)",
			"image": "https://d3qoj2c6mu9s8x.cloudfront.net/Custom/Content/Products/41/84/4184666_tenis-adidas-ultraboost-20-feminino_m13_637344804781339828.jpg",
			"price": "240",
			"brand": "adidas",
			"category": "feminino"
		},
		{
			"name": "Tenis Vans Crazy",
			"image": "https://backwash.fbitsstatic.net/img/p/tenis-vans-feminino-old-skool-plataform-checkerboard-91183/341526.jpg?w=800&h=800&v=no-change&qs=ignore",
			"price": "300",
			"brand": "vans",
			"category": "feminino"
		},
		{
			"name": "Tenis Vans Impact",
			"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qTnxBNzZzeYLiSrt1xGS7NfAqfrdhVDdoYdzKFdKn1Ilaqg9ADQ95AbPRvp6kAIXFxQ&usqp=CAU",
			"price": "300",
			"brand": "vans",
			"category": "feminino"
		},
		{
			"name": "Tenis Vans infantil fofinho",
			"image": "https://images.tcdn.com.br/img/img_prod/473150/tenis_vans_old_skool_infantil_preto_branco_8001_1_552ae8487c7d2b19977a0e233de7218f.png",
			"price": "233",
			"brand": "vans",
			"category": "infantil"
		},
		{
			"name": "Tenis Vans infantil Ainda mais fofo",
			"image": "https://static.sessionstore.com.br/public/session/imagens/produtos/tenis-vans-inf-old-skool-v-black-white-233551.jpg",
			"price": "500",
			"brand": "vans",
			"category": "infantil"
		},
		{
			"name": "Tenis Nike Funny (infantil)",
			"image": "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-air-max-excee-infantil-CD6893-001-1.jpg",
			"price": "700",
			"brand": "nike",
			"category": "infantil"
		},
		{
			"name": "Tenis Nike Fantasy (infantil)",
			"image": "https://images.lojanike.com.br/1024x1024/produto/tenis-nike-flex-runner-infantil-AT4665-001-3-31626441300.jpg",
			"price": "200",
			"brand": "nike",
			"category": "infantil"
		},
		{
			"name": "Tenis Adidas Aventure (infantil)",
			"image": "https://m.media-amazon.com/images/I/61L60+-HrzL._AC_SY535_.jpg",
			"price": "144",
			"brand": "adidas",
			"category": "infantil"
		},
	];

	try {
		const products = await db.collection("products").find({brand: "adidas"});
		if(!products) {
			await db.collection("products").insertMany(data);
			console.log(chalk.green("Have putted products in database"));
		}else{
			console.log(chalk.green("Products aready in DB!"));
		}
	} catch (e) {
		console.log(chalk.red(`Products aren't in database! ${e}`))
	};
}
