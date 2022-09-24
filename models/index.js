// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: 'category_id'});

// Categories has many Products
Category.hasMany(Product, {foreignKey: 'category_id'});
// add foreign key

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {foreignKey: 'product_id', through: ProductTag})
// needs through, model, and unique

// Tag belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {foreignKey: 'tag_id', through: ProductTag})
// needs through, model, and unique

// export models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
