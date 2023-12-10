import Transaction from "../models/Transaction.js";
import { responder } from "../util.js";


const postApiTransaction =
   async (req, res) => {

      const { amount, type, category, description } = req.body;

      const transaction = new Transaction({
         amount,
         type,
         category,
         description
      });
      try {
         const savedTransaction = await transaction.save();

         return responder({
            res,
            success: true,
            message: 'Transaction saved',
            data: savedTransaction
         });
      }
      catch (err) {
         return responder({
            res,
            success: false,
            message: err.message
         });


      }
   }

const getApiTransaction =
   async (req, res) => {
      const allTransactions = await Transaction.find();

      return responder({
         res,
         success: true,
         message: "All transactions fetach successfully !",
         data: allTransactions
      });

   }

const getApiTransactionById = async (req, res) => {
   const { id } = req.params;

   const showTransaction = await Transaction.findOne({ _id: id })
   res.json({
      success: true,
      data: showTransaction,
      message: "Successfully fetch data by"
   })

}

//  Get Transaction by user id

const getTransactionByUserId = async (req, res) => {
   try {
      const { id } = req.params;

      const findUserTransaction = await Transaction.find({ user: id }).populate('user')

      findUserTransaction.forEach((singleTransaction) => {
         singleTransaction.user.password = undefined;
      })

      res.json({
         success:true,
         data:findUserTransaction,
         message:"fetach user transaction successfully"
      })

   }
   catch(err) {
      res.json({
         success:false,
         message:err.message
      })
   }
    }

export { postApiTransaction, getApiTransaction, getApiTransactionById ,getTransactionByUserId};