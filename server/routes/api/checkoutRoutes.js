const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET);  

// api/checkout/secret
router.get('/secret', async(req,res) =>{
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'aud',
            payment_method_types: ['card'],
            receipt_email:req.body.userEmail,
            shipping:req.body.shipping
          });
          res.status(200).json({client_secret : paymentIntent.client_secret})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
    
})

module.exports = router;
