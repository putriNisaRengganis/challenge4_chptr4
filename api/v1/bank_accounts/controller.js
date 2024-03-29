import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

import { getAll, getById, create, update, deleteData } from "./service.js";
import response from "../helper/response.js";

const getAllBankAccounts = async (req, res) => {
    try {
        const bank_accounts = await getAll();
        response(res, 200, "All bank_accounts", bank_accounts);
    } catch (error) {
        response(res, 500, error.message, []);
    }
};

const getBankAccountById = async (req, res) => {
    const id = req.params.id;
    try {
        const bank_account = await getById(id);
        if (bank_account) {
            response(res, 200, "Bank Account found", bank_account);
        } else {
            response(res, 404, "Bank Account not found", {});
        }
    } catch (error) {
        response(res, 500, error.message, {});
    }
};

const createBankAccount = async (req, res) => {
    const data = req.body;
    try {
        const bank_account = await create(data);
        response(res, 201, "Bank Account created", bank_account);
    } catch (error) {
        response(res, 500, error.message, {});
    }
};

const updateBankAccount = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const bank_account = await update(id, data);
        response(res, 200, "Bank Account updated", bank_account);
    } catch (error) {
        response(res, 500, error.message, {});
    }
};

const deleteBankAccount = async (req, res) => {
    const id = req.params.id;
    try {
        const bank_account = await deleteData(id);
        response(res, 200, "Bank Account deleted", bank_account);
    } catch (error) {
        response(res, 500, error.message, {});
    }
};


export { getAllBankAccounts, getBankAccountById, createBankAccount, updateBankAccount, deleteBankAccount };
