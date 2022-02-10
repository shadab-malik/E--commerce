const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Please write a review!'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    product: {
      type: mongoose.Schema.ObjectId,     
      ref: 'Product',
      required: [true, 'Review must belong to a product.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user'],
    },
  },
  {
    timestamps: true
  }
);

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
