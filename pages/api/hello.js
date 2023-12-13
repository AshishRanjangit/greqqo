// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { query } from '../../lib/db';


import mysql from 'mysql';

// const { DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD } = process.env;

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "greqqodatabase"
// });

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (error, results) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(results);
    });
  });
};


export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Handle GET request (Read)
    try {
      const results = await query('SELECT * FROM usersingup');
      return res.json(results);
    } catch (error) {
      return res.status(500).json({ message: 'Error fetching tasks', error });
    }
  }   
}
