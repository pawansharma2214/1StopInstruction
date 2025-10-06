// lib/db.js
import mysql from 'mysql2/promise';

// Create a connection pool (recommended for Next.js)
const pool = mysql.createPool({
  host: '185.3.95.20',     // or your remote host
  user: 'stopinstruction_staging-user',          // your MySQL username
  password: '0A1aeb+?Me4',          // your MySQL password
  database: 'stopinstruction_stopinst_db_latest', // your database name
});

export default pool;