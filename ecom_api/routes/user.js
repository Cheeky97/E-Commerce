const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("../routes/verifyToken");

//UPDATE USER 
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

//DELETE USER
router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted...");
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router