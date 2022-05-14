const jwt = require("jsonwebtoken");


const verifyToken = (req,res,next) => {
    const authHeader = req.headers.authentication;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, data)=>{
            if(err){
                res.status(403).json("Token is not valid!");
            }else{
                req.user = data;
                next();
            }
        })
    }else{
        return res.status(401).json("You are not authenticated!");
    }
}

module.exports = {verifyToken};