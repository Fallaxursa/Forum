import axios from "axios";
import { API_BASE_USER } from "../components/Constants";
//dont forget to add try catches for errors.
const createUser = async (requestDTO) => {
    const response = await axios.post(`${API_BASE_USER}`, requestDTO);
    return response.data;
};

const getUser = async (id) => {
    if (!id) {
        throw new error("error id doesnt exist")
    }
    const response = await axios.get(`${API_BASE_USER}/${id}`);
    return response.data;
};

const getAllUsers = async () => {
    const response = await axios.get(`${API_BASE_USER}`);
    return response.data;
};

const updateUser = async (id, updateDTO) => {
    const response = await axios.put(`${API_BASE_USER}/${id}`, updateDTO);
    return response.data;
};

const deleteUser = async (id) => {
    const response = await axios.delete(`${API_BASE_USER}/${id}`);
    return response.data;
};

export default {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
};