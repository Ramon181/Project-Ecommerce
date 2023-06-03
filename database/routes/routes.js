const { Router } = require('express');
const categoriesRoute = require('./categoriesRoute.js');
const productsRoute = require('./productsRoute.js');
const userRoute =require("./User/usetsRoute");
const reviewRoute = require('./Reviews/reviewsRoute.js');

const router = Router();

router.use('/categories', categoriesRoute);
router.use('/products', productsRoute);
router.use('/user', userRoute);
router.use('/reviews', reviewRoute);

module.exports = router;