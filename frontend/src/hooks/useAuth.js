import { jwtDecode } from "jwt-decode";

const useAuth = () => {
    try {
        const token = localStorage.getItem('token');
        const decoded = jwtDecode(token);

        return decoded;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default useAuth;