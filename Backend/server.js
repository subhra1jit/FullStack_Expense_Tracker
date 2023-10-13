import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/connectMongoDB.js";
import expenseRouter from "./routes/expense.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/exp", expenseRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
  connectDB();
  console.log(`the server is running on the port ${PORT}`);
});
