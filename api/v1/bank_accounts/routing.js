import express from 'express';
import {getAllBankAccounts, getBankAccountById, createBankAccount, updateBankAccount, deleteBankAccount} from "./controller.js";

const bankAccountRouter = express.Router();

//define the routes
bankAccountRouter.get("/api/v1/accounts", getAllBankAccounts);
bankAccountRouter.get("/api/v1/accounts/:id", getBankAccountById);
bankAccountRouter.post("/api/v1/accounts", createBankAccount);
bankAccountRouter.put("/api/v1/accounts/:id", updateBankAccount);
bankAccountRouter.delete("/api/v1/accounts/:id", deleteBankAccount);

export default bankAccountRouter;