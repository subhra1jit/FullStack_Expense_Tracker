import Expense from "../models/expenseSchema.js";

export const getAllData = async (req, res) => {
  try {
    const data = await Expense.find();

    if (data) {
      res.status(201).json({
        message: "successfully get all the data",
        data: data,
      });
    } else {
      req.status(400).json({
        message: "unable to process the request now",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "something wrong",
    });
  }
};

export const setTheData = async (req, res) => {
  const { category, description, amount } = req.body;
  if (!category || !description || !amount) {
    res.status(400).json({
      message: "unable to process please provide all the detatils",
    });
  }

  try {
    const data = await Expense.create({
      category: category,
      description: description,
      amount: amount,
    });

    if (data) {
      res.status(200).json({
        message: "the information successfully added",
        data: data,
      });
    } else {
      req.status(400).json({
        message: "unable to process the request now",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "something wrong",
    });
  }
};
