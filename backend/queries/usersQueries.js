const queries = {
    // Signup
    insertUser: 
        ` INSERT INTO users (username, email, password, rol)
            VALUES ($1, $2, $3, $4) RETURNING *;`,
    // Login
    loginUser:
        ` SELECT * FROM users
            WHERE email = $1 AND password = $2;`,
    // Autenticación Login
    loginUserByEmail:
        ` SELECT * FROM users
            WHERE email = $1
        `,
    // Logout
    logoutUser:
        ` SELECT * FROM users
            WHERE email = $1 AND password = $2;`
}

module.exports = queries;