import React, { useState ,useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Auth from "../../utils/Auth";
import axios from "axios";
import './MyTransaction.css';
function MyTransactions (){

    const [transactions,setTransactions] = useState();
    const [creditSum , setCreditSum] = useState(0);
    const [debitSum , setDebitSum] = useState(0);

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
      const getUser = JSON.parse (localStorage.getItem ('user') || '{}');
      const storageUser = getUser._id;
      console.log(storageUser);

      const response =await axios.get(`/api/transactions/user/${storageUser}`); 
        const transactionData =response?.data?.data
       
        let creditTotal = 0;
        let debitTotal = 0;

        transactionData?.forEach((transaction) =>{
            if (transaction.type ==="credit") {
                creditTotal += transaction.amount;    
            } else{
                debitTotal += transaction.amount;
            }
        })

        setCreditSum(creditTotal);
        setDebitSum(debitTotal);

        setTransactions(transactionData);
    };


    useEffect(()=>{
        loadTransactions();
    },[])

    useEffect(() => {
        Auth(); 

       
    },[])
    return(
        <>
         <Navbar/>
       <div className="app">
      
       <h1>My Transactions</h1>

       <h2> Credit : {creditSum}</h2>
        <h2>Debit : {debitSum}</h2>
{
    transactions?.map((transaction,index) => {
        const{_id, amount, type, category,description, createdAt, } =transaction;

        
        const date = new Date(createdAt).toLocaleDateString();
        const time = new Date(createdAt).toLocaleTimeString();
      return(
        <>
        <div key={index} className="transaction-card">
       <span className={`transaction-amount ${type==="debit" ?"debit-ammount" :"credit-ammount"}`}>
        {type==="debit"?"-" :"+"}
        {amount}</span>
        {type==="debit" ? "Debited" :"Credited"} on {date} at {time}

        <span className="transaction-category">
        {CATEGORY_EMOJI_MAP[category]}
        {category}
        </span>
        <hr/>
        <p>{description}</p>

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