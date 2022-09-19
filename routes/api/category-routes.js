const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // add try, await, catch
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // requires try, await, if - return, catch
  // include model - product, 
  // attributes - product name, price, stock
});

router.post('/', (req, res) => {
  // create a new category
  // requires try, await, catch
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // requires try, await, if - return, catch
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  // requires try, await, if - return, catch
});

module.exports = router;
