const jwt = require('jsonwebtoken');
const dotenv= require('dotenv')
const secret = process.env.JSON_SECRET;
const expiration = '2h';

module.exports = {
  // verify user thru token
  verifyToken: function (req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.status(401).json("unauthenticated");

    // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    try {
      // verify user token
      const { data } = jwt.verify(token, secret);
      req.user = data;
      next();
    } catch {
      res.status(403).json("invalid token");
    }
  },

  verifyUser: function(req,res,next) {
    this.verifyToken(req,res, () => {
      // compare current user id and user id from request
      if (req.user._id ===! req.params.id) 
      return res.status(403).json('unauthorised action');

      next()
    })
  },

  verifyAdmin: function(req,res,next) {
    this.verifyToken(req,res, () => {
      // check if user is admin
      if (!req.user.isAdmin) 
      return res.status(403).json('unauthorised action');

      next()
    })
  },
  
  signToken: function (userData) {
    const payload = userData;
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
