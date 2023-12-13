import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Auth from "../../utils/Auth";
import Navbar from "../../components/Navbar/Navbar";
import axios from 'axios';
import './UpdateTransaction.css';
import showToast from 'crunchy-toast';


function UpdateTransaction () {
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const { id } = useParams();

  const fetchTrans = async () => {
    const response = await axios.get(`/api/v1/transactions/${id}`)
    const { amount, type, description, category } = response.data.data;

    setAmount(amount)
    setType(type)
    setDescription(description)
    setCategory(category)
  }
  useEffect(() => {
    fetchTrans()
  }, [])

  const UpdateTransaction = async () => {
    const response = await axios.put(`/api/transactions/${id}`, {
      amount,
      type,
      description,
      category
    })

    if (response?.data?.data) {
      const successMessage = 'Transaction updated successfully';
      showToast(successMessage, 'success', '3000');
      window.location.href = '/mytransactions'
    }

    setAmount('')
    setCategory('')
    setDescription('')
    setType('')

  }

    useEffect(() => {
        Auth();
    }, [])
    return (
        <>
            <Navbar />
           
            <div className="form-main-cont">
            
                <form className="form">
                <h1 className="heading">Update Transactions</h1>
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
                            setDescription(e.target.value)
                        }}
                    />
                    <div className=" add-btn-cont">
                        <button className="btn-add-transaction" onClick={UpdateTransaction}>
                            Update Transaction
                        </button>
                    </div>

                </form>

            </div>
        </>
    )
}
export default UpdateTransaction;