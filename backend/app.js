import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import router from './routes/auth.js';
import mongoose from 'mongoose';
const Port = 3001


dotenv.config()
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  // credentials: true 
}));

app.use(express.json());
app.use('/api/auth', router);


app.get('/api/home', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(Port, () => {
      console.log(`Example app listening on port ${Port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });