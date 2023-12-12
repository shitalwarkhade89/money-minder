import { useState, useEffect } from "react";
import Auth from "../../utils/Auth";
import Navbar from "../../components/Navbar/Navbar";
import axios from 'axios';
import './AddTransaction.css';
import showToast from 'crunchy-toast';


function AddTransaction() {
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [description, setdescription] = useState("");

    const addtransactions = async () => {
        const userStorage = JSON.parse(localStorage.getItem('user'));
        

        const response = await axios.post('/api/v2/transactions', {
            user: userStorage?._id,
            amount: amount,
            type: type,
            description: description,
            category: category
        })

        showToast(response?.data?.message,'success',3000);

        if (response?.data?.success) {
            window.location.href = '/mytransactions';
        }
    }


    


    useEffect(() => {
        Auth();
    }, [])
    return (
        <>
            <Navbar />
           
            <div className="form-main-cont">
            
                <form className="form">
                <h1 className="heading">Add Transactions</h1>
                    <input
                        type="number"
                        placeholder="Enter amount"
                        className="input-box"
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value)
                        }}
                    />
                    <br/><br/>

                    <div>
                        <label htmlFor="type" className="label">Type :</label>
                        <br/>
                        <div className="radio-btn">
                            <div className="radio-btn-cont">
                                <input
                                    type="radio"
                                    className="gender"
                                    value="credit"
                                    checked={type === "credit"}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setType(e.target.value)
                                        }
                                    }}
                                />
                                <label className="label-credit">Credit</label>

                                <input
                                    type="radio"
                                    className="gender"
                                    value="debit"
                                    checked={type === "debit"}
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            setType(e.target.value)
                                        }
                                    }}
                                />
                                <label className="label-credit">Debit</label>
                            </div>
                        </div>

                    </div>
                    <div>
                        <label htmlFor="category" className="label"> Category</label> <br />

                        <select className="select-category"
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                        >
                            <option>
                                Select Category Here
                            </option>
                            <option value="food">Food</option>
                            <option value="shopping">Shopping</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="rent">Rent</option>
                            <option value="education">Education</option>
                            <option value="travel">Travel</option>
                            <option value="salary">Salary</option>
                            <option value="freelancing">Freelancing</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <input
                        type="text"
                        placeholder="Enter description"
                        className="input-box"
                        value={description}
                        onChange={(e) => {
                            setdescription(e.target.value)
                        }}
                    />
                    <div className=" add-btn-cont">
                        <button className="btn-add-transaction" onClick={addtransactions}>
                            Add Transaction
                        </button>
                    </div>

                </form>

            </div>
        </>
    )
}
export default AddTransaction;