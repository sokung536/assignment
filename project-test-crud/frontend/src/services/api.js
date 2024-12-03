import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        console.log('Response from /users:', response);
        return response;
    } catch (error) {
        console.error('Error in getUsers:', error.response || error.message);
        throw error; 
    }
};

export const createUser = async (user) => {
    try {
        const response = await axios.post(`${API_URL}/users`, user);
        console.log('Response from createUser:', response);
        return response;
    } catch (error) {
        console.error('Error in createUser:', error.response || error.message);
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const response =  await axios.delete(`${API_URL}/users/${id}`);
        console.log('Response from deleteUser:', response);
        return response;
    } catch (error) {
        console.error('Error in deleteUser:', error.response || error.message);
        throw error;
    }
};

export const updateUser = async (user) => {
    try {
        const response = await axios.put(`${API_URL}/users`, user);
        console.log('Response from updateUser:', response);
        return response;
    } catch (error) {
        console.error('Error in updateUser:', error.response || error.message);
        throw error;
    }

};

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/users/${id}`);
        console.log('Response from getUserById:', response);
        return response;
    } catch (error) {
        console.error('Error in getUserById:', error.response || error.message);
        throw error;
    }
};