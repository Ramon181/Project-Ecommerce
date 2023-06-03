const { Router } = require('express');
const {Category} = require("../db")

const router = Router();

router.post("/", async (req, res) => {
    try {
        const name =req.body.name
        if (name) {
            await Category.create({name});
            res.send("Category created");
        }else{
            res.send("Category No create");
        }
    } catch (error) {
        console.log(error.message)
    }
})

router.get("/", async (req, res) => {
    try {
      res.send(await Category.findAll());
    } catch (error) {
      res.send(error.message);
    }
  });

module.exports = router;