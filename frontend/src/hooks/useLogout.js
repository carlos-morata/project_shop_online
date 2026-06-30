const useLogout = () => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }

    return { handleLogout }
}

export default useLogout;