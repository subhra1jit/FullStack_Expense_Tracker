import axios from "axios";
import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavCom from "./NavCom";

const ExpenseForm = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { category, description, amount } = formData;
    if (!category || !description || !amount) {
      toast.error("Please write all the form details");
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const config = {
        "Content-Type": "application/json",
      };
      const res = await axios.post(
        "http://localhost:4000/api/exp",
        formData,
        config
      );
      if (res.data) {
        toast.success("Successfully Expense added!");
        setShow(true);
        setLoading(false);
        setFormData({
          category: "",
          description: "",
          amount: "",
        });
      }
    } catch (err) {
      console.log(err);
      toast.error("Something Wrong");
      setShow(true);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-sky-300">
      <div className="absolute top-2 left-0 w-full flex justify-center items-center">
        <NavCom />
      </div>
      <ToastContainer />
      <div className="h-auto flex items-center justify-center bg-gray-100 rounded-xl">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-6">Add Monthly Expense</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-gray-600 font-medium mb-2"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-11/12 py-2 px-2 bg-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-600 font-medium"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-11/12 py-2 px-2 bg-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-gray-600 font-medium"
              >
                Amount
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-11/12 py-2 px-2 bg-gray-300 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              {loading ? (
                <TailSpin color="white" radius={"1px"} height={30} width={30} />
              ) : (
                "Add Expense"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpenseForm;
