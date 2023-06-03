const Router = require("express");
const { Review, User } = require("../../db");

const router = Router();

router.post("/", async (req, res) => {
  const { productId, userName, stars, description } = req.body;
  try {
    const user = await User.findByPk(userName);
    if (user.mute) return res.send("User cant comment");
    const newReview = await Review.create({
      productId,
      userName,
      stars,
      description,
    });
    res.send(newReview);
  } catch (error) {
    console.log(error.mensage);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findAll({
      where: {
        productId: id,
        hidden: false,
      },
    });
    res.send(review);
  } catch (error) {
    console.log(error.mensage);
  }
});

router.get("/", async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: {
        hidden: false,
      },
    });
    res.send(reviews);
  } catch (error) {
    console.log(error.mensage);
  }
});

router.put("/", async (req, res) => {
  const { productId, userName, description, stars, icon } = req.body;
  try {
    await Review.update(
      {
        userName,
        productId,
        description,
        stars,
        icon
      },
      {
        where: { productId, userName },
      }
    );
    res.send("Review modificada");
  } catch (error) {
    console.log(error.mensage);
  }
});

module.exports = router;
