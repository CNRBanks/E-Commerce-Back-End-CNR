const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagz = await Tag.findAll({ include: [Product] });
    res.json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
  // find all tags
});

router.get('/:id', async (req, res) => {
  try {
    const oneTag = await Tag.findOne({ include: [Product],
    where: { id: req.params.id },
  });
  res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
  // find a single tag by its `id`
});

router.post('/', async (req, res) => {
  try {
    const postTag = await Tag.create(req.body);
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const putTag = await Tag.update({
      where: {id: req.params.id },
    });
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: { id: req.params.id },
    });
    res.json(deleteTag);
  } catch (error) {
    res.status(400).json(error);
  }
  // delete on tag by its `id` value
});

// export model
module.exports = router;
