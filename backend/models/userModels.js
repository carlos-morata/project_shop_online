const pool = require("../config/db_sql");
const queries = require("../queries/usersQueries");

// Crear Usuario -> [POST] /api/signup
const createUser = async (username, email, password, rol = 'user') => {
    try {
        if(!username || !email || !password) {
            throw new Error('Nombre de Usuario, Email y Contraseña son Obligatorios');
        }
        const result = await pool.query(queries.insertUser,[ username, email,  password, rol ]);
        return result;
    } catch(error) {
        console.error('Error al Registrar Usuario: ', error.message);
        throw new Error('Error al Registrar Usuario');
    }
}

// Iniciar Sesión -> [POST] /api/login
const loginModel = async (email) => {
    try {
        if(!email) {
            throw new Error('Email es obligatorio');
        }
        const resultLogin = await pool.query(queries.loginUserByEmail, [ email ]);
        return resultLogin
    } catch(error) {
        console.error('Error al Iniciar Sesión: ', error.message);
        throw new Error('Error al Iniciar Sesión');
    }
}

const logoutModel = async (email, password) => {
    try {
        if(!email || !password) {
            throw new Error('Email y Contraseña son Obligatorios para Cerrar Sesión');
        }
        const resultLogout = await pool.query(queries.logoutUser, [ email, password ]);
        return resultLogout
    } catch(error) {
        console.error('Error al Cerrar Sesión: ', error.message);
        throw new Error('Error al Cerrar Sesión');
    }
}

module.exports = {
    createUser,
    loginModel,
    logoutModel
}