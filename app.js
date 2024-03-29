import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors' 
import 'dotenv/config'
import userRoutes from './Routes/userRoutes.js'
import authRoutes from './Routes/authRoutes.js'
import productRoutes from './Routes/productRoutes.js'
import purchaseRoutes from './Routes/purchaseRoutes.js'
import wishlistRoutes from './Routes/wishlistRoutes.js'
import cartRoutes from './Routes/cartRoutes.js'
import newsLetter from './Routes/newsLetterRoutes.js'
import bodyParser from 'body-parser';
import otp from './Routes/emailroute.js' 
import Feedback from './Routes/feedbackRoutes.js'
import orderRoutes from './Routes/orderRoutes.js'
import addressRoutes from './Routes/addressRoutes.js'
import paymentRoutes from "./Routes/paymentRoutes.js"
const app = express()
app.use(express.json())
app.use(cors())
app.use('/register', userRoutes)//signup
app.use('/insert', userRoutes)
app.use('/update', userRoutes)
app.use('/delete', userRoutes)//user deletion
app.use('/auth', authRoutes)
app.use('/product', productRoutes)// /product
app.use('/purchase', purchaseRoutes)//purchase/purchase
app.use('/wishlist', wishlistRoutes)//whishlist
app.use('/cart',cartRoutes)//cart
app.use('/newsletter',newsLetter)//contactUs
app.use(bodyParser.json());
app.use('/otp', otp);
app.use('/feedback', Feedback);//feedback
app.use('/order',orderRoutes)
app.use('/address',addressRoutes)// /address/address
app.use('/payment',paymentRoutes)
await mongoose.connect('mongodb://127.0.0.1:27017/powertools').then(() => {
  app.listen(9000, () => console.log('Server Running in port 9000'))
}).catch(err => console.log(err.message))

app.all('/', (req, res) => {
  res.send('API Working')
})

export default app
