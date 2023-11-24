import  express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const connection = async () => {
 const conn = await mongoose.connect(process.env.MONGODB_URI)
 if (conn) {
    console.log('MongoDB connected successfully !');
 }
};
connection();

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
    console.log(`server running 0n port ${PORT}`)});

