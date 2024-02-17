   const express = require('express');
   const { Pool } = require('pg');

   const app = express();
   const pool = new Pool({
     user: 'your_username',
     host: 'localhost',
     database: 'your_database',
     password: 'your_password',
     port: 7,
   });

   app.use(express.json());

   app.get('/users', async (req, res) => {
     const client = await pool.connect();
     const result = await client.query('SELECT * FROM users');
     client.release();
     res.json(result.rows);
   });

   app.listen(7, () => {
     console.log('Server running on port 3000');
   });
   