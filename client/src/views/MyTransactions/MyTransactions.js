import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Auth from "../../utils/Auth";
import axios from "axios";
import showToast from 'crunchy-toast';
import './MyTransaction.css';
import editicon from "./edit.png";
import deleteicon from "./delete.png";
function MyTransactions() {

  const [transactions, setTransactions] = useState();
  const [creditSum, setCreditSum] = useState(0);
  const [debitSum, setDebitSum] = useState(0);
  // const [user, setUser] = useState({});

  const CATEGORY_EMOJI_MAP = {
    "food": "🍔",
    "entertainement": "📺",
    "shopping": "🛍",
    "rent": "🏡",
    "travel": "✈",
    "education": "🏫",
    "salary": "💰",
    "freelancing": "💻",
    "side-hussle": "👔",
    "other": "🤔"
  }

  const loadTransactions = async () => {
    const getUser = JSON.parse(localStorage.getItem('user') || '{}');
    const storageUser = getUser._id;
    console.log(storageUser);

    const response = await axios.get(`/api/transactions/user/${storageUser}`);
    const transactionData = response?.data?.data

    let creditTotal = 0;
    let debitTotal = 0;

    transactionData?.forEach((transaction) => {
      if (transaction.type === "credit") {
        creditTotal += transaction.amount;
      } else {
        debitTotal += transaction.amount;
      }
    })

    setCreditSum(creditTotal);
    setDebitSum(debitTotal);

    setTransactions(transactionData);
  };


  useEffect(() => {
    loadTransactions();
  }, [])

  const deleteUserTransaction = async (id) => {
    const response = await axios.delete(`/api/transavtions/${id}`);

    if (response?.data?.success) {
      showToast(response?.data?.message, 'success', '3000');
      loadTransactions();
    }
  }
  const updateTransaction = async (id) => {
    window.location.href = `/api/transactions/${id}`
  }

  // useEffect(() => {
  //   const userstorageData = JSON.parse(localStorage.getItem('user') || '{}');

  //   if (userstorageData?.email) {
  //     setUser(userstorageData);
  //   }
  //   else {
  //     showToast('you are not logged in!', 'danger', 1000);
  //     window.location.href = '/login'
  //   }

  // }, [])

  useEffect(() => {
    Auth();


  }, [])
  return (
    <>
      <Navbar />
      <div className="app">

        <h1 className="heading">My Transactions</h1>

        <div className="total-amount-cont">
          <h2> Credit : {creditSum}</h2>
          <h2>Debit : {debitSum}</h2>
        </div>
        {
          transactions?.map((transaction, index) => {
            const { _id, amount, type, category, description, createdAt, } = transaction;


            const date = new Date(createdAt).toLocaleDateString();
            const time = new Date(createdAt).toLocaleTimeString();
            return (
              <>
                <div key={index} className="transaction-card">
                  < span className={`transaction-amount ${type === "debit" ? "debit-ammount" : "credit-ammount"}`}>
                    {type === "debit" ? "-" : "+"}
                    {amount}</span>

                  <span className="transaction-category">
                    {CATEGORY_EMOJI_MAP[category]}
                    {category}
                  </span>
                  <div>
                    <img src={editicon} alt="Edit" className="edit-icon" onClick={() => { updateTransaction(_id) }} />
                  </div>
                  <hr />
                  <div className="description-div">
                    <p className="transaction-description">{description}</p>
                    {type === "debit" ? "Debited" : "Credited"} on {date} at {time}

                  </div>
                  <div>
                    <img src={deleteicon} alt="delete" className="delete-icon" onClick={() => { deleteUserTransaction(_id) }}/>
                  </div>


                </div>
              </>
            )
          })
        }

      </div>
    </>
  )
}
export default MyTransactions