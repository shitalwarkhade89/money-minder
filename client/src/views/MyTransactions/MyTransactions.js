import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Auth from "../../utils/Auth";
function MyTransactions (){

    useEffect(() => {
        Auth(); 
    },[])
    return(
        <>
       <div>
        <Navbar/>
        <h1>My Transactions</h1>
       </div>
        </>
    )
}
export default MyTransactions