import mongoose from "mongoose";

const expenseSchema = mongoose.Schema;

const NewExpense = new expenseSchema(
  {
    category: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Expense", NewExpense);
