import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const ProductModel = mongoose.model('product', ProductSchema);
export default ProductModel;

