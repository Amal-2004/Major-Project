// app.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import emailroute from './routes/emailroute.js';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/powertools', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', emailroute);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
