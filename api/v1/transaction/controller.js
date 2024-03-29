import { getAll, getById, transfer } from "./service.js";
import response from '../helper/response.js';

const getAllTransactions = async (req, res) => {
    try {
        const transactions = await getAll();
        response(res, 200, 'All transactions', transactions);
    } catch (error) {
        response(res, 500, error.message, []);
    }
};

const getTransactionById = async (req, res) => {
    const id = req.params.id;
    try {
        const transaction = await getById(id);
        if (transaction) {
            response(res, 200, 'Transaction found', transaction);
        } else {
            response(res, 404, 'Transaction not found', {});
        }
    } catch (error) {
        response(res, 500, error.message, {});
    }
};

const transferTransaction = async (req, res) => {
    const data = req.body;
    try {
        const transaction = await transfer(data);
        response(res, 201, 'Transaction Success', transaction);
    } catch (error) {
        response(res, 500, error.message, {});
    }
};

export { getAllTransactions, getTransactionById, transferTransaction };