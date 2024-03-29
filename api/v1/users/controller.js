import { getById, getAll, update, deleteData, create, createWithProfile } from "./service.js";
import response from "../helper/response.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await getAll();
        response(res, 200, "All users", users);
    } catch (error) {
        response(res, 500, error.message, []);
    }
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await getById(id);
        if (user) {
            response(res, 200, "User found", user);
        } else {
            response(res, 404, "User not found", {});
        }
    } catch (error) {
        response(res, 500, error.message, {});
    }
}

const createUser = async (req, res) => {
    const data = req.body;
    try {
        const user = await create(data);
        response(res, 201, "User created", user);
    } catch (error) {
        response(res, 500, error.message, {});
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const user = await update(id, data);
        response(res, 200, "User updated", user);
    } catch (error) {
        response(res, 500, error.message, {});
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await deleteData(id);
        response(res, 200, "User deleted", user);
    } catch (error) {
        response(res, 500, error.message, {});
    }
}

const createUserWithProfile = async (req, res) => {
    const data = req.body;
    try {
        const user = await createWithProfile(data);
        response(res, 201, "User created", user);
    } catch (error) {
        response(res, 500, error.message, {});
    }
}

export { getAllUsers, getUserById, updateUser, deleteUser, createUser, createUserWithProfile };