import {Schema,model } from 'mongoose';
const transactionSchema = new Schema({
amount: {
   type: Number,
   requireed: true 
},
type:{
   type:String,
   enum:['credit', 'debit'],
   required: true
},
description:{
type: String
},
category:{
   type:String,
   enum:['food','entertainment','rent','travel','education','other'],
   default: 'other'
}
},{
   timestamps: true 
})

const Transaction = model('Transaction',transactionSchema);

export default Transaction;
