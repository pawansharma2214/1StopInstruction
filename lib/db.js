// lib/db.js
import mysql from 'mysql2/promise';

// Create a connection pool (recommended for Next.js)
const pool = mysql.createPool({
  host: 'localhost',     // or your remote host
  user: 'root',          // your MySQL username
  password: '',          // your MySQL password
  database: '1stopinstruction', // your database name
});

export default pool;