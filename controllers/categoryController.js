const Category = require('../models/category');

// Add a new category
exports.addCategory = async (req, res) => {
  const { name, type } = req.body;
  try {
    const newCategory = new Category({ name, type });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
