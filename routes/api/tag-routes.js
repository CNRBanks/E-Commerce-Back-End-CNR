const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  // try, await findAll, catch
  // include model: product, and through: productTag
  // include attributes - id, product name, price, and stock
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  // try, awai findByPk, if - return, catch
  // include model: product, and through: productTag
  // include attributes - id, product name, price, and stock
});

router.post('/', (req, res) => {
  // create a new tag
  // add try, await create, and catch
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  // add try, await update, if - return, and catch
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  // add try, await destroy, if - return, and catch
});

// export model
module.exports = router;
