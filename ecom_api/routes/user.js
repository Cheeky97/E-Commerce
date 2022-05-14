const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const {verifyToken, verifyTokenAndAuthorization} = require("../routes/verifyToken");

router.put("/:id", verifyTokenAndAuthorization, async (req,res) => {
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.CIPHER_PASS).toString();
    }

    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{new: true});
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);
    }

})

module.exports = router