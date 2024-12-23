const jwt=require('jsonwebtoken');

const jwtauthMiddleware=(req, res, next)=>{

    //first check request headers has the autherization or not
    const autherization=req.headers.authorization;
    if(!autherization){
        return res.status(401).send({message:"Please provide the authorization token"});
    }
    ///extract the token from the header
    const token=req.headers.authorization.split(' ')[1]; //split the token from the header and get the second part
    if(!token){
        return res.status(401).json({error:'Unauthorized, Token not found'});

    }

    try {
        //verify the token
        const decoded=jwt.verify(token, process.env.JWT_SECRET); //once the token will be verified it will return the payload

        //attach the decoded data to the request object
        req.userPayload=decoded; //we can use anykey name of our convience , here i have used userPayload or user data 
        next(); //move to the next phase

    } catch (error) {
        return res.status(401).json({error:'Invalid token'});
        
    }
}

//function to generate the jwt token
const generateToken=(payload)=>{
    //gereate the token
    const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error('JWT_SECRET is not defined');
  }

  return jwt.sign(payload, secret, { expiresIn: '3000s' });
} 

module.exports={jwtauthMiddleware, generateToken};