const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try {
    const tagz = await Tag.findAll({ include: [Product] });
    res.json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
  // find all tags
  // be sure to include its associated Product data
  // try, await findAll, catch
  // include model: product, and through: productTag
  // include attributes - id, product name, price, and stock
});

router.get('/:id', (req, res) => {
  try {
    const oneTag = await Tag.findOne({ include: [Product],
    where: { id: req.params.id },
  });
  res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // try, awai findByPk, if - return, catch
  // include model: product, and through: productTag
  // include attributes - id, product name, price, and stock
});

router.post('/', (req, res) => {
  try {
    const postTag = await Tag.create(req.body);
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
  // create a new tag
  // add try, await create, and catch
});

router.put('/:id', (req, res) => {
  try {
    const putTag = await Tag.update({
      where: {id: req.params.id },
    });
    res.json(category);
  } catch (error) {
    res.status(400).json(error);
  }
  // update a tag's name by its `id` value
  // add try, await update, if - return, and catch
});

router.delete('/:id', (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: { id: req.params.id },
    });
    res.json(deleteTag);
  } catch (error) {
    res.status(400).json(error);
  }
  // delete on tag by its `id` value
  // add try, await destroy, if - return, and catch
});

// export model
module.exports = router;
