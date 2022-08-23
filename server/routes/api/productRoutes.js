const router = require('express').Router();
const Product = require('../../models/Product');
const { verifyAdmin } = require('../../utils/auth');

// get all product, api/products/{number}
router.get('/', async(req,res) =>{
    {
        try {
          // limit the number of products being fetched
          const limit = req.query.limit;
          // skip the results
          const skip = req.query.skip;
          let productData;

          if (limit) {
            productData = skip? 
              await Product.find().limit(limit).skip(skip)
              :await Product.find().limit(limit)
          }else productData = await Product.find();
          res.status(200).json(productData);
         }
        catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      }
}) 

// get a single product, api/products/id/:id
router.get('/:id', async (req,res) => 
  {
    try {
      console.log(req.body)
      const productData = await Product.findById(req.params.id);
      if (!productData) { 
        return res.status(404).json({ message: 'No product with that ID' });
      }
      else res.status(200).json(productData);
     }
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

// get a single product, api/products/id/:id
router.post('/',verifyAdmin, async (req,res) => 
  {
    try {
      const productData = await Product.create(req.body);

      return res.status(201).json(productData);
     }
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  })

// delete a single product, api/products/id/:id
router.delete('/id/:id',verifyAdmin, async (req,res) => 
  {
    try {
        const id = req.params.id
        const productData = await Product.findByIdAndDelete(id);

        return res.status(200).json(productData);
     }
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// update a product infor, api/products/id/:id

router.put('/id/:id',verifyAdmin, async (req,res) => 
  {
    try {
        const id = req.params.id
        const productData = await Product.findOneAndUpdate({id:id},req.body);

        return res.status(200).json(productData);
     }
    catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports=router