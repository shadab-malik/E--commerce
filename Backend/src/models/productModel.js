const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A product must have a name'],
      unique: true,
      trim: true,
    },
    slug: String,
    description: {
      type: String,
      required: [true, 'Please Enter product Description'],
    },
    price: {
      type: Number,
      required: [true, 'Please Enter product Price'],
      max: [8, 'Price cannot exceed 8 characters'],
    },
    imageCover: {
      type: String,
      required: [true, 'A product must have a cover image'],
    },
    images: [String],
    categories: [
      {
        type: String,
        required: [true, 'Please Enter Product Categories'],
      },
    ],
    stock: {
      type: Number,
      required: [true, 'Please Enter product Stock'],
      default: 1,
    },
    avgRating: {
      type: Number,
      default: 0,
      set: (val) => Math.round(val * 10) / 10, // 4.666666, 46.6666, 47, 4.7
    },
    numOfRatings: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
