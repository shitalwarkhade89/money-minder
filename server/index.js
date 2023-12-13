import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import { getApiHealth } from './controllers/health.js';
import{postApiTransaction ,getApiTransaction ,getApiTransactionById ,getTransactionByUserId , updateTransactionById ,deleteUserTrandactionById ,postApiTransactionv2} from "./controllers/transaction.js";
import{postApiSingup ,postApiLogin} from "./controllers/user.js";
import path from 'path';
const __dirname = path.resolve();
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

app.post('/api/v2/transactions',postApiTransactionv2);

app.get('/api/v1/transactions',getApiTransaction);

app.get('/api/v1/transactions/:id',getApiTransactionById);

app.post('/api/v1/singups',postApiSingup);

app.post('/api/v1/logins',postApiLogin);

app.get('/api/transactions/user/:id', getTransactionByUserId);

app.put('/api/transactions/:id' ,updateTransactionById);

app.delete('/api/transavtions/:id' ,deleteUserTrandactionById);

if (process.env.NODE_ENV === 'production') {
   app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
 
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
   });
 }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
   console.log(`server running 0n port ${PORT}`)
});

