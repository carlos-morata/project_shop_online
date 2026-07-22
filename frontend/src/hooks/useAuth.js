import { jwtDecode } from "jwt-decode";

const verifyRol = () => {
    try {
        const token = localStorage.getItem('token');
        const decoded = jwtDecode(token);

        return decoded;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default verifyRol;