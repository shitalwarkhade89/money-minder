import Transaction from "../models/Transaction.js";
import { responder } from "../util.js";

// post transactions
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

// get transactions
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
// get transaction by id
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
         success: true,
         data: findUserTransaction,
         message: "fetach user transaction successfully"
      })

   }
   catch (err) {
      res.json({
         success: false,
         message: err.message
      })
   }
}

//  put/ update  transactionsby id

const updateTransactionById = async (req, res) => {
   const { id } = req.params;
   const { amount, type, description, category } = req.body;

   await Transaction.updateOne({ _id: id }, {
      $set: {
         amount: amount,
         type: type,
         description: description,
         category: category,
      }
   });

   const updateTransaction = await Transaction.findOne({ _id: id });

   res.json({
      success: true,
      data: updateTransaction,
      message: "Transaction update successfully"
   })
}

// delete user Transactions API
const deleteUserTrandactionById = async (req,res) => {
   const {id} =req.params;
   const deleteTransaction = await Transaction.deleteOne({_id:id});

   res.json({
      success:true,
      data:deleteTransaction,
      message:'Transaction delete'
   })
}

export { postApiTransaction, getApiTransaction, getApiTransactionById, getTransactionByUserId , updateTransactionById , deleteUserTrandactionById };