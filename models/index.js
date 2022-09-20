// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: 'category_id'});


// Categories have many Products
// add foreign key

// Products belongToMany Tags (through ProductTag)
// needs through, model, and unique

// Tags belongToMany Products (through ProductTag)
// needs through, model, and unique

// export models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
