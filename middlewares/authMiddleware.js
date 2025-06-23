import jwt, { decode } from "jsonwebtoken"

export const authMiddleware = async (req,res ,next)=>{

try {
    const { token } = req.cookies;
     
    if (!token) {
      return res.status(400).json({
        succes: false,
        message: "not authorized login again",
      });
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if(tokenDecode.id){
      req.auth = {
      userId: tokenDecode.id,
      // Add other details if needed
    };
    
    }else{
      res.json({
        succes:false,
        message:"user not login"
      })
    }
    
    next();
  } catch (error) {
    console.error( error);
    res.status(500).json({ message: "Internal server error" });
  }
}

