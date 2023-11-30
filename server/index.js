import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import { getApiHealth } from './controllers/health.js';
import{postApiTransaction ,getApiTransaction ,getApiTransactionById} from "./controllers/transaction.js";
import{postApiSingup ,postApiLogin} from "./controllers/user.js";
const app = express();
app.use(express.json());

const connection = async () => {
   const conn = await mongoose.connect(process.env.MONGODB_URI)
   if (conn) {
      console.log('MongoDB connected successfully !');
   }
};
connection();

app.get('/api/health',getApiHealth );

app.post('/api/v1/transactions',postApiTransaction );

app.get('/api/v1/transactions',getApiTransaction);

app.get('/api/v1/transactions/:id',getApiTransactionById);

app.post('/api/v1/singups',postApiSingup);

app.post('/api/v1/logins',postApiLogin);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`server running 0n port ${PORT}`)
});

