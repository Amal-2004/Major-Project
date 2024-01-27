import Product from '../Models/product.js'
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } 
  catch (error) {
    res.status(500).json({ message: error.message })
  }
}
//Finding a Particular Product using ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } 
  catch (error) {
    res.status(404).json({ message: 'Product not found' })
  }
};
//Creating New Product
const createProduct = async (req, res) => {
  const product = new Product(req.body)
  try {
    const newProduct = await product.save()
    res.status(201).json(newProduct)
    console.log("Product Inserted Succesfully")
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
//Updating a eisting product using ID
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id.trim(); // Trim the product ID
    const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true })

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json(updatedProduct);
    console.log('Product Updated Successfully')
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
//Deleting a product by using particular ID
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id.trim()// Trim the product ID
    const deletedProduct = await Product.findByIdAndDelete(productId)

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json({ message: 'Product deleted successfully' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}
