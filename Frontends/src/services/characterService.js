import axios from "axios";

const API_BASE = "http://localhost:8080/characters";

const characterService = {

    createCharacter: async (characterData) => {
        const response = await axios.post(API_BASE, characterData);
        return response.data;
    },

    getAllCharacters: async () => {
        const response = await axios.get(API_BASE);
        return response.data;
    },

    getCharacterById: async (id) => {
        const response = await axios.get(`${API_BASE}/${id}`);
        return response.data
    },

    getCharacterByName: async (name) => {
        const response = await axios.get(`${API_BASE}/search`, { params: { name } });
        return response.data;    
    },

    updateCharacterDescription: async (id, description) => {
        const response = await axios.put(`${API_BASE}/${id}/description`, description);
        return response.data;
    },

    updateLikes: async (id, likes) => {
        const response = await axios.put(`${API_BASE}/${id}/likes`, likes);
        return response.data;
    },

    updateDislikes: async (id, dislikes) => {
        const response = await axios.put(`${API_BASE}/${id}/dislikes`, dislikes);
        return response.data;
    },

    getTagsForCharacter: async (id) => {
        const response = await axios.get(`${API_BASE}/${id}/tags`);
        return response.data;
    },

    addTagsToCharacter: async (id, tagDTOs) => {
        const response = await axios.post(`${API_BASE}/${id}/tags`, tagDTOs)
        return response.data;
    },

    removeTagFromCharacter: async (id, tagName, category) => {
        const response = await axios.delete(`${API_BASE}/${id}/tags`, {
            data: { tagName, category }
        });
        return response.data;
    },

    clearTags: async (id) => {
        const response = await axios.delete(`${API_BASE}/${id}/tags/clear`);
        return response.data;
    },

    getCharacterByTag: async (tagName, category) => {
        const response = await axios.get(`${API_BASE}/tags/search`, {
            params: { tagName, category }
        });
        return response.data;
    },

    clearAllCharacters: async () => {
        const response = await axios.delete(`${API_BASE}/clear`);
        return response.data;
    }

}


export default {
    characterService
}