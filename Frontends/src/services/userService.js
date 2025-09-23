import axios from "axios";
import { API_BASE } from "../components/Constants";

// const createUser = async () => {
//     try {
//         const response = await axios.get(API_BASE);

//     } catch {

//     }
// }


const createUser = async (requestDTO) => {
    const response = await axios.post(`${API_BASE}`, requestDTO);
    return response.data;
}

const getUser = async (id) => {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response.data;
}

const getAllUsers = async () => {
    const response = await axios.get(`${API_BASE}`);
    return response.data;
}

const updateUser = async (id, updateDTO) => {
    const response = await axios.put(`${API_BASE}/${id}`, updateDTO);
    return response.data;
}

//unsure about this?
const deleteUser = async (id) => {
    const response = await axios.delete(`${API_BASE}/${id}`);
    return response.data;
}

export default {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
}