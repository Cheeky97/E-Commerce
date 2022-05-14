const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");

//REGISTER
router.post("/register", async (req, res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CIPHER_PASS).toString()
    });

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }

})

//LOGIN
router.post("/login", async (req, res)=>{
    try{
        const user = await User.findOne({ username: req.body.username });
       // !user && res.status(401).json("Wrong Credentials!");
        if(!user){
            res.status(401).json("Wrong Credentials!");
        }else{
            const hashedpassword = CryptoJS.AES.decrypt(user.password, process.env.CIPHER_PASS);

            const Originalpassword = hashedpassword.toString(CryptoJS.enc.Utf8);
            //password !== req.body.password && res.status(401).json("Wrong Credentials!");
            const {password, ...others} = user._doc;

            if(Originalpassword !== req.body.password){
                res.status(401).json("Wrong Credentials!");
            }else{
                res.status(200).json(others);
            }
        }

    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router