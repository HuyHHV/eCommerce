const { Schema, model } = require('mongoose');

const cartSchema = new Schema (
    {
    userID : {
        type:Schema.Types.ObjectId, 
        ref:'User'
    }, 
    productId:{
        type: Schema.Types.ObjectId,
        ref: 'Product',     
    },
    quantity: {
        type:Number,
        default:1
    },
    size: {type:Number, require:true}
    }
);

const Cart = model('Cart', cartSchema);

module.exports=Cart;
