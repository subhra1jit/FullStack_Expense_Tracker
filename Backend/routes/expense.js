import express from "express";
import { getAllData, setTheData } from "../controllers/expenseController.js";

const expenseRouter = express.Router();

expenseRouter.route("/").get(getAllData);
expenseRouter.route("/").post(setTheData);

export default expenseRouter;
