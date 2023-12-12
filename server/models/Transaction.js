import {Schema,model } from 'mongoose';
const transactionSchema = new Schema({
   user:{
      type:Schema.Types.ObjectId,
      required:true,
      ref:'User'
  },
amount: {
   type: Number,
   required: true 
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
   enum:['food','entertainment','rent','travel','education','salary','other','shopping'],
   default: 'other'
}
},{
   timestamps: true 
})

const Transaction = model('Transaction',transactionSchema);

export default Transaction;
