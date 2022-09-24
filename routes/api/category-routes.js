const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// find all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [Product] });
    res.json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
});
// find one category by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findOne({
      include: [Product],
      where: { id: req.params.id },
    });
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});
// create a new category
router.post("/", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});
// update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.update({
      where: { id: req.params.id },
    });
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});
// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const category = await Category.destroy({
      where: { id: req.params.id },
    });
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
