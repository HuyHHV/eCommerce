const { Schema, model } = require('mongoose');

const addressSchema = new Schema (
    {   
        brand: {type:String},
        name: { type: String, required: true},
        description: [{ type: String, required: true }],
        imgSrc: { type: String, required: true },
        categories: {type:String},
        material: [String],
        price: { type: String, required: true },
        inStock: { type: Boolean, default: true },
    }
)

const Product = model('Product', productSchema);
module.exports = Product;
