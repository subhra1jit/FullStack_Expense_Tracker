import axios from "axios";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    async function fetchExpenses() {
      try {
        const config = {
          "Content-Types": "application/json",
        };
        const res = await axios.get("http://localhost:4000/api/exp", config);
        if (res.data) {
          //console.log(res.data.data);
          setExpenses(res.data.data);
        }
      } catch (err) {
        console.log(err);
        setExpenses([]);
        toast.error("Something Wrong");
      }
      setLoading(false);
    }

    fetchExpenses();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-sky-300 gap-3">
      <button
        className="w-32 h-10 py-2 px-2 bg-black text-white rounded-md"
        onClick={() => handleClick()}
      >
        Add Expenses
      </button>
      <ToastContainer />
      {loading ? (
        <TailSpin color="white" radius={"1px"} height={100} width={100} />
      ) : (
        <div className="h-auto flex items-center justify-center bg-gray-100 rounded-md">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-6">Monthly Expenses</h2>
            <ul>
              {expenses?.map((expense) => (
                <li key={expense?.id} className="mb-4">
                  <div className="text-lg font-semibold">
                    {expense?.category}
                  </div>
                  <div className="text-gray-600">{expense?.description}</div>
                  <div className="text-blue-600">Amount: {expense?.amount}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
