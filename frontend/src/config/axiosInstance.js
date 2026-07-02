import axios from 'axios';
const VITE_API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: `${VITE_API_URL}`,
});

api.interceptors.response.use(
    // Si todo va bien, no hacemos nada
    (response) => response,
    (error) => {
        if(error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
)

export default api;