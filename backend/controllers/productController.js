import Product from '../models/Product.js';

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch   
 (err) {
    res.status(500).json({ message:   
 'Something went wrong' });
  }
};

 const createProduct = async (req, res) => {
  const { name, price, description, imageUrl } = req.body;

  try {
    const newProduct = new Product({ name, price, description, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default {createProduct, getProducts}

