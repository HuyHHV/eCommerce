const router = require('express').Router();
const {User} = require('../../models');
const {signToken} = require('../../utils/auth')

// SINGUP route, api/auth/signup
router.post('/signup', async(req, res) => {
    try{
        if(req.body.isAdmid) {return res.status(403).json("unauthorised action") };

        const count = await User.countDocuments({email:req.body.email});
        console.log(count) ;
        if (count !== 0) {
            return res.status(401).json("email is already in use");
        }

        const user = await User.create(req.body);
        const {password, ...userInfo} = user._doc;
        const token = signToken(user);
        return res.status(200).json({token,userInfo});
    }
    catch(err) {res.status(400).json(err);}
} )

// LOGIN route, api/auth/signin

router.post('/signin', async(req,res) => {
    try{
        const user = await User.findOne({email:req.body.email});

        // check whether user existed
        if (!user) {
            return res.status(401).json("Incorrect email or password")
          }
        // console.log(user)
        // check password
        const correctPw = await user.isCorrectPassword(req.body.password);
        if (!correctPw) {
        return res.status(401).json("Incorrect email or password")
        }
        // if correct password return jwt token
        const {password, ...userInfo} = user._doc;
        const token = signToken(user);
        return res.status(200).json({token,userInfo})
    }
    catch(err) {
        console.log(err);
        res.status(400).json(err);}
});

module.exports = router