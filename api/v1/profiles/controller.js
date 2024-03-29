import {getAll, getById, create, update, deleteData } from './service.js';
import response from '../helper/response.js';

const getAllProfiles = async (req, res) => {
    try {
        const profiles = await getAll();
        response(res, 200, 'All profiles', profiles);
    } catch (error) {
        response(res, 500, error.message, []);
    }
}

const getProfileById = async (req, res) => {
    const id = req.params.id;
    try {
        const profile = await getById(id);
        if (profile) {
            response(res, 200, 'Profile found', profile);
        } else {
            response(res, 404, 'Profile not found', {});
        }
    } catch (error) {
        response(res, 500, error.message, {});
    }
}

const createProfile = async (req, res) => {
    const data = req.body;
    try {
        const profile = await create(data);
        response(res, 201, 'Profile created', profile);
    } catch (error) {
        response(res, 500, error.message, {});
    }
}

const updateProfile = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
        const profile = await update(id, data);
        response(res, 200, 'Profile updated', profile);
    } catch (error) {
        response(res, 500, error.message, {});
    }
}

const deleteProfile = async (req, res) => {
    const id = req.params.id;
    try {
        const profile = await deleteData(id);
        response(res, 200, 'Profile deleted', profile);
    } catch (error) {
        response(res, 500, error.message, {});
    }
}

export { getAllProfiles, getProfileById, createProfile, updateProfile, deleteProfile };