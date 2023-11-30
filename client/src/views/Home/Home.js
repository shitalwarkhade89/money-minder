import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';

function Home(){
    const [transactions,settransactions] = useState();
    

    const loadTransactions = async () => {  
      const responce =await axios.get('/api/v1/transactions'); 
        const transactionData =responce?.data?.data
        console.log(transactionData);
        settransactions(transactionData);
    };
    
    useEffect(()=>{
        loadTransactions();
    },[])
    return(
        <>
        <Navbar/>
    <h1 className='heading'> All Expences</h1>
    {
        transactions?.map((transaction,index) => {
            const{_id, amount, type, category,description, createdAt, updatedAt} =transaction;
          return(
            <>
            <div key={index}>
               {amount}

            </div>
            </>
          )  
        })
    }
    
        </>
    )
}
export default Home