const router = require('express').Router();
const {User} = require('../../models');
const {signToken} = require('../../utils/auth')

// SINGUP route, api/auth/signup
router.post('/signup', async(req, res) => {
    const count = await User.countDocuments({email:req.body.email})
    console.log(count) ;
    if (count !== 0) {
        return res.status(401).json("email is already in use");
    }
    try{
        const user = await User.create(req.body);
        const token = signToken(user);
        return res.status(200).json(token);
    }
    catch(err) {res.status(400).json(err);}
} )

// LOGIN route, api/auth/signup

router.post('/login', async(req,res) => {
    try{
        const user = await User.findOne(req.body.email);

        // check whether user existed
        if (!user) {
            return res.status(401).json("Incorrect email or password")
          }

        // check password
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
        return res.status(401).json("Incorrect email or password")
        }
    }
    catch(err) {res.status(400).json(err);}
});

module.exports = router