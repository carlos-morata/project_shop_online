const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl: { rejectUnauthorized: false }
});

pool.connect()
    .then(() => {
        console.log('✅ Conexión a la BBDD establecida');
    }).catch(err => {
        console.error('❌ Error en conexión a la BBDD', err)
    });


module.exports = pool;