import Product from '../Models/product.js'

const createProduct = async (req, res) => {
  try {
    const { productName, productPrice, productModel,description } = req.body
    console.log(productName, productPrice, productModel,description)
    if (!productName || !productPrice ||!productModel || !description) {
      throw new Error('Required properties are missing in the request body')
    }

    const newProduct = new Product({
      productName,
      productPrice,
      productModel,
      description
    })

    const savedProduct = await newProduct.save()
    res.status(201).json(savedProduct)
    console.log("Product Inserted Successfully")
  } catch (error) {
    console.error('Error creating product:', error.message)
    res.status(400).json({ message: error.message })
  }
};

//get all products
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
}

//Updating a eisting product using ID
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id.trim(); 
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
