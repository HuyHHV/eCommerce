 const { Schema, model } = require('mongoose');

const productSchema = new Schema (
    {
        name: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        img: { type: String, required: true },
        categories: [String],
        size: [String],
        color: [String],
        price: { type: String, required: true },
        inStock: { type: Boolean, default: true },
    }
)

const Product = model('Product', productSchema);
module.exports = Product;
