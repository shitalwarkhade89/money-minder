import { useEffect } from "react";
import Auth from "../../utils/Auth";
import Navbar from "../../components/Navbar/Navbar";
function AddTransaction () {

    useEffect(() => {
        Auth(); 
    },[])
    return(
        <>
       <div>
       <Navbar/>
        <h1>Add Transactions</h1>
       </div>
       </>
    )
}
export default AddTransaction;