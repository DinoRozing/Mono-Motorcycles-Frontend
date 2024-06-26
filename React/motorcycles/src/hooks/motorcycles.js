import axiosInstance from './axiosConfig';

export const addMotorcycle = async (newMotorcycle) => {
    try {
        const response = await axiosInstance.post('/api/Motorcycle/AddMotorcycle', newMotorcycle);
        return response.data;
    } catch (error) {
        console.error('Error adding motorcycle', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const updateMotorcycle = async (updatedMotorcycle) => {
    try {
        const response = await axiosInstance.put(`/api/Motorcycle/UpdateMotorcycle/${updatedMotorcycle.Id}`, updatedMotorcycle);
        return response.data;
    } catch (error) {
        console.error('Error updating motorcycle', error);
        throw error;
    }
};

export const deleteMotorcycle = async (idToDelete) => {
    try {
        await axiosInstance.delete(`/api/Motorcycle/DeleteMotorcycle/${idToDelete}`);
    } catch (error) {
        console.error('Error deleting motorcycle', error);
        throw error;
    }
};

export const getMotorcycleById = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/Motorcycle/GetMotorcycleById/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching motorcycle by ID', error);
        throw error;
    }
};

export const getAllMotorcycles = async () => {
    try {
        const response = await axiosInstance.get('/api/Motorcycle/GetMotorcycles');
        return response.data;
    } catch (error) {
        console.error('Error fetching motorcycles', error);
        throw error;
    }
};
