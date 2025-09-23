import axios from "axios";
import { API_BASE } from "../components/Constants";

const createTopic = async (requestDTO) => {
    const response = await axios.post(`${API_BASE}`, requestDTO);
    return response.data;
}



export default {
    createTopic,
    
}