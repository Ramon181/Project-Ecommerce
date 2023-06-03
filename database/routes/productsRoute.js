const { Router } = require('express');
const { Op } = require("sequelize")
const { Category, Product } = require("../db");

const router = Router();

router.post("/", async (req, res) => {
    const {
        name,
        brand,
        description,
        image,
        price,
        condition,
        categories,
        stock,
    } = req.body;
    try {
        const newProduct = await Product.create({
            name,
            brand,
            description,
            image,
            price,
            condition,
            stock,
        });
        const category = await Category.findAll({
            where: { name: categories }
        });
        newProduct.addCategory(category);
        res.send(newProduct);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    through: { attributes: [] },
                },
            ],
        })
        res.send(products);
    } catch (error) {
        console.log(error.message)
    }
})

router.put("/status/false", async (req, res) => {
    // console.log(req.body)
    const { id } = req.body;
    try {
        const product = await Product.findByPk(id);
        product.update({ status: false });
        await product.save();
        res.send("Product false");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});


router.put("/visits", async (req, res) => {
    // console.log(req.body)
    const { id, visit } = req.body;
    try {
        const product = await Product.update({ visits: visit }, { where: { id } });
        res.send(product);
    } catch (err) {
        console.log(err.message);
    }
});

router.put("/status/true", async (req, res) => {
    // console.log(req.body)
    const { id } = req.body;
    try {
        const product = await Product.findByPk(id);
        product.update({ status: true });
        await product.save();
        res.send("Product true");
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

router.get("/max", async (req, res) => {
    try {
        const { visit } = req.query;
        const maxVisits = await Product.findAll({

            where: {
                visits: visit
            }


        })
        res.status(200).send(maxVisits)
    } catch (error) {
        console.log(error.message)
    }
})


router.get("/filterBy", async (req, res) => {
    let { name } = req.query;
    try {
        if (name) {
            const search = await Product.findAll({
                where: {
                    name: { [Op.iLike]: `%${name}%` }
                }
            })
            res.send(search);
        }
    } catch (error) {
        console.log(error.message)
    }
});

router.get("/filter", async (req, res) => {
    let { category, name, minPrice, maxPrice, amount, page,order} = req.query;
    if (!minPrice) minPrice = 0;
    if (!maxPrice) maxPrice = 2147483647; // Max integer value
    if (!name) name = "";
    if (!page) page = 0;
  if (!amount) amount = 10;
    try {

        const search = await Product.findAndCountAll({
            order: [
                ["price", order ? order : "ASC"],
                ["name", "ASC"],
              ],
            offset: page * amount,
            limit: amount,
            where: {
                name: { [Op.iLike]: `%${name}%` },
                hidden: false,
                price: { [Op.between]: [minPrice, maxPrice] },
            },
            ...(category ? {
                include: {
                    model: Category,
                    through: { attributes: [] },
                    where: { name: { [Op.iLike]: category } },
                }
            } :
                {})
        })
        res.send(search);

    } catch (error) {
        console.log(error.message)
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id, {
            include: [
                { model: Category, through: { attributes: [] } },
            ],
        });
        res.send(product);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});


module.exports = router;