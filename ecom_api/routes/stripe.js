const router = require("express").Router();
// const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")("sk_test_51L05rZHBwns1ghZxwCqnAGweAtQoyXYNOosgssd2XO5rVBRQIdf3Mze9L5V8E6N3mGy52UtBOMxm8fxiZm93wO9k002TZmXXnL");

router.post("/payment", (req,res)=>{
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "gbp"
        },
        (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr);
        }else{
            res.status(200).json(stripeRes);
        }
    });
});

module.exports = router;