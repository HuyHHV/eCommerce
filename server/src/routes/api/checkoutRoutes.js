const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET);  

// api/checkout/secret
router.post('/secret', async(req,res) =>{
    try {
        console.log(req.body)
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'aud',
            payment_method_types: ['card'],
            receipt_email:req.body.userEmail,
          });
        console.log(paymentIntent)
        res.status(200).json(paymentIntent)
    } catch (error) {
        
        res.status(500).json(error)
    }
    
})
// api/checkout/cancel
router.post('/cancel', async(req,res) =>{
    try {
        console.log(req.body.id)
        const intentID = req.body.id
        const response = await stripe.paymentIntents.cancel(intentID);
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
    
})

module.exports = router;
