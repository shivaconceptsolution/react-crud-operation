const Product = require('../models/product');
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createProduct = async(req,res)=>{
    const pitems = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
      });
    const product = await pitems.save();
    if (!product) {
        return res.status(404).json({ message: 'Product not inserted' });
      }
      res.json(product);
}

exports.updateProduct = async(req,res)=>{
    const productId = req.params.id;
    const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        {
            $set: {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
            }
        },
        { new: true } // This option returns the updated document
    );
    if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(updatedProduct);
}

exports.deleteProduct = async(req,res)=>{
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
    }

    return res.status(200).json({ message: 'Product deleted successfully' });
}