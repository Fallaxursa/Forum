import axios from "axios";

const API_BASE = "http://localhost:8080/tags";

const tagService = {
    getAllTags: async () => {
        const response = await axios.get(API_BASE);
        return response.data;
    },

    getTagsByCategory: async (category) => {
        const response = await axios.get(`${API_BASE}/category/${category}`);
        return response.data;
    },

    createTag: async (tagDTO) => {
        const response = await axios.post(API_BASE, tagDTO);
        return response.data;
    },

    updateTag: async (id, tagDTO) => {
        const response = await axios.put(`${API_BASE}/${id}`, tagDTO);
        return response.data;
    },

    deleteTag: async (id) => {
        const response = await axios.put(`${API_BASE}/${id}`);
        return response.data;
    },
};

export default tagService;