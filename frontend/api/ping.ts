import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function pingBackend() {
    const response = await axios.get(`${BASE_URL}/ping`);
    return response.data;
}