import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors' 
import userRoutes from './Routes/userRoutes.js'
import authRoutes from './Routes/authRoutes.js'
import productRoutes from './Routes/productRoutes.js'
import purchaseRoutes from './Routes/purchaseRoutes.js'
import wishlistRoutes from './Routes/wishlistRoutes.js'
import cartRoutes from './Routes/cartRoutes.js'
import newsLetter from './Routes/newsLetterRoutes.js'
import bodyParser from 'body-parser';
import router from './Routes/emailroute.js';

const app = express()

app.use(express.json())
app.use(cors())
app.use('/register', userRoutes)
app.use('/insert', userRoutes)
app.use('/update', userRoutes)
app.use('/delete', userRoutes)
app.use('/auth', authRoutes)
app.use('/product', productRoutes)
app.use('/purchase', purchaseRoutes)
app.use('/wishlist', wishlistRoutes)
app.use('/cart',cartRoutes)
app.use('/newsletter',newsLetter)
app.use(bodyParser.json());
app.use('/otp', router);
await mongoose.connect('mongodb://127.0.0.1:27017/powertools').then(() => {
  app.listen(9000, () => console.log('Server Running in port 9000'))
}).catch(err => console.log(err.message))

app.all('/', (req, res) => {
  res.send('API Working')
})

export default app
