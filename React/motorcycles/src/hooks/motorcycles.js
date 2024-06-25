import axiosInstance from './axiosConfig';

const API_URL = 'api/Motorcycle';

export const getMotorcycleById = async (id) => {
    try {
        const response = await axiosInstance.get(`${API_URL}/GetMotorcycle/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching motorcycles', error);
        throw error;
    }
};
export const getAllMotorcycles = async () => {
    try {
        const response = await axiosInstance.get(`${API_URL}/GetMotorcycles`);
        return response.data;
    } catch (error) {
        console.error('Error fetching motorcycles', error);
        throw error;
    }
};
export const addMotorcycle = async (newMotorcycle) => {
    try {
        debugger;
        const response = await axiosInstance.post(`${API_URL}/AddMotorcycle`, newMotorcycle);
        return response.data;
    } catch (error) {
        console.error('Error adding motorcycle', error);
        throw error;
    }
};

export const deleteMotorcycle = async (idToDelete) => {
    try {
        await axiosInstance.delete(`${API_URL}/DeleteMotorcycle/${idToDelete}`);
    } catch (error) {
        console.error('Error deleting motorcycle', error);
        throw error;
    }
};

export const updateMotorcycle = async (updatedMotorcycle) => {
    try {
        const response = await axiosInstance.put(`${API_URL}/UpdateMotorcycle/${updatedMotorcycle.id}`, updatedMotorcycle);
        return response.data;
    } catch (error) {
        console.error('Error updating motorcycle', error);
        throw error;
    }
};
